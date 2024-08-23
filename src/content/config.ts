import { defineCollection, z } from "astro:content";
import { Storyblok } from "./storyblok-api";
import { Schema, ZodSchema } from "astro/zod";
import type { ImageInputFormat } from "astro";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// TODO: move me to ./schemas/*
const imageMetadataSchema = z.object({
  src: z.string(),
  width: z.number(),
  height: z.number(),
  format: z.string(),
  orientation: z.number().optional(),
});
const assetSchema = z.object({
  id: z.coerce.string(),
  alt: z.string(),
  asset_folder_id: z.number().nullable(),
  content_length: z.number(),
  content_type: z.string(),
  copyright: z.string(),
  ext_id: z.number().nullable(),
  filename: z.string(),
  short_filename: z.string().optional(),
  source: z.string(),
  space_id: z.number(),
  title: z.string(),
  updated_at: z.coerce.date(),
  created_at: z.coerce.date(),
  deleted_at: z.coerce.date().nullable(),
  expire_at: z.coerce.date().nullable(),
  focus: z.string(),
  internal_tag_ids: z.array(z.string()),
  is_private: z.boolean(),
  locked: z.boolean(),
  imageMetadata: imageMetadataSchema.optional(),
  realFilename: z.string(),

  // file: z.string().nullable(),
  // permanently_deleted: z.boolean(),
  // publish_at: z.coerce.date().nullable(),
  // internal_tags_list: z.array(z.object({ id: z.number(), name: z.string() })),
  // meta_data: z.object({
  //   alt: z.string(),
  //   title: z.string(),
  //   source: z.string(),
  //   copyright: z.string(),
  // }),
});
const assetsSchema = z.array(assetSchema);

const photos = defineCollection({
  /**
   * Read more about the Astro Content Layer:
   *    - https://astro.build/blog/astro-4140/#experimental-content-layer-api
   *    - https://github.com/withastro/roadmap/blob/content-layer/proposals/0047-content-layer.md
   *
   * @todo: move me to a loader in ../loaders/storyblok-images.ts
   */
  loader: async () => {
    // Get all assets in folder
    // https://www.storyblok.com/docs/api/management/core-resources/assets/retrieve-multiple-assets

    // TODO: handle pagination
    // https://www.storyblok.com/docs/api/content-delivery/v2/getting-started/pagination
    const { data, perPage, total } = await Storyblok.get(
      "/spaces/301477/assets/",
      {
        in_folder: "627922",
        sort_by: "created_at:desc",
        // NOTE: short_filename is mostly undefined so isn't really helpful here
        // sort_by: "short_filename:desc",
        per_page: 100,
      },
    );

    const assets = data.assets
      .filter((asset: z.output<typeof assetSchema>) =>
        asset.content_type.startsWith("image/"),
      )
      .map((asset: z.output<typeof assetSchema>) => {
        if (!asset.content_type.startsWith("image/")) return asset;

        // https://www.storyblok.com/docs/image-service
        const src = asset.filename.replace(
          "https://s3.amazonaws.com/a.storyblok.com/",
          "https://a.storyblok.com/",
        );
        // .concat("/m/");

        // const format = asset.content_type;
        const format = asset.content_type.replace(
          "image/",
          "",
        ) as ImageInputFormat;

        const dimensionsString = asset.filename.split("/")[6];
        const dimensions = {
          width: Number(dimensionsString.split("x")[0]),
          height: Number(dimensionsString.split("x")[1]),
        };

        const imageMetadata = {
          ...dimensions,
          src,
          format,
        };

        const realFilename = src.split("/")[7].split(".")[0] || "";

        return {
          ...asset,
          imageMetadata,
          realFilename,
        };
      });

    const result = assetsSchema.parse(assets);

    return result;
  },
  schema: assetSchema,
});

export const collections = { blog, photos };
