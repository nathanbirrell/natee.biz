My personal website, built with:

- eleventy for static site and blog toolchain
- exifreader for reading image details
- github-markdown-css for github-ish styles

## Get started

```
pnpm install

pnpm start
```

## PDF resume generation

<!-- wkhtmltopdf --disable-internal-links --print-media-type --user-style-sheet ./css/print.css http://localhost:8080/resume/ ./assets/resume.pdf -->

**NOTE: PDF asset generation is currently a manual process**, in the future it would be nice to add this to a github action or eleventy plugin.

Run the local dev server, then generate the resume PDF from HTML:

`pnpm run generate-resume-pdf` or just open it in a browser and CMD+P.

## 🚢 CI & Deployments

All handled in Github Actions automagically.
