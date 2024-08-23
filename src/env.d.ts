/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CLOUDFARE_ANALYTICS_TOKEN: string;
  readonly STORYBLOK_ACCESS_TOKEN: string;
  readonly STORYBLOK_OAUTH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
