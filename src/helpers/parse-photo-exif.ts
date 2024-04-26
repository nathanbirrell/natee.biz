import ExifReader from "exifreader";
import type { ImageMetadata } from "astro";

/* Parse date string in YYYY-MM-DD hh:mm:ss format
 ** separator can be any non-digit character
 ** e.g. 2017:03:09 14:49:21
 */
function parseExifDate(input: string) {
  var split = input.split(/\D/).map((i) => Number.parseFloat(i));
  return new Date(
    split[0],
    split[1] - 1,
    split[2],
    split[3],
    split[4],
    split[5],
  );
}

/**
 * Parse a set of photos and return them with their exif metadata
 *
 * @param images ie: "/path/to/images/*.{jpeg,jpg,png,gif}"
 *    Read more: https://docs.astro.build/en/recipes/dynamically-importing-images/
 */
export async function parsePhotosWithExif(
  images: Record<
    string,
    () => Promise<{
      default: ImageMetadata;
    }>
  >,
) {
  // TODO: look into an option that integrates better with Astro collections
  // const photosInput = await getCollection("photos")
  // const photosInput = await Astro.glob("/src/content/photos/*").then(files => {
  //   return files.map(file => file.default);
  // });

  const imagesWithMetadata = await Promise.all(
    Object.entries(images).map(async ([path, loadImageFn]) => {
      const absolutePath = `${process.cwd()}${path}`;
      const exifData = await ExifReader.load(absolutePath);

      // console.log({exifData})

      const make = exifData.Make?.description || "";
      const pubDate = exifData.DateTimeOriginal?.description
        ? parseExifDate(exifData.DateTimeOriginal?.description)
        : parseExifDate(exifData.DateTime?.description || "");
      let lensFocalLength: number | undefined;

      // we only want exif for reliable fuji pics
      if (make.toLowerCase().includes("fujifilm")) {
        lensFocalLength = Number.parseInt(
          (exifData.FocalLength?.value.toString() || "").split(",1")[0],
        );
      }

      const exif = {
        make,
        model: exifData.Model?.description || "",
        lens: exifData.Lens?.value || "",
        lensFocalLength: lensFocalLength,
        lensFocalLengthEquivalent: lensFocalLength && lensFocalLength * 1.5,
        iso: exifData.ISOSpeedRatings?.value || "",
        aperture: exifData.FNumber?.description || "",
        shutter: exifData.ExposureTime?.description || "",
      };

      // console.log({ exif });

      // ie loadImage: () => import('./my-photo.jpg')
      const loadImage = loadImageFn;

      return { loadImage, pubDate, exif };
    }),
  );

  const result = imagesWithMetadata.sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf(),
  );

  return result;
}
