import StoryblokClient from "storyblok-js-client";

const SPACE_ID = 301477;

const Storyblok = new StoryblokClient({
  accessToken: import.meta.env.STORYBLOK_ACCESS_TOKEN,
  oauthToken: import.meta.env.STORYBLOK_OAUTH_TOKEN,
  endpoint: "https://mapi.storyblok.com/v1",
});

if (!Storyblok) throw new Error("Missing Storyblok API client");

// Get an asset folder
// const { data } = await Storyblok.get("/spaces/301477/asset_folders/627922", {});
// Get all assets in folder
// const { data } = await Storyblok.get("/spaces/301477/assets", { in_folder: 627922 });

export { Storyblok, SPACE_ID };
