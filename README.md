My personal website, built with:

- eleventy for static site and blog toolchain
- exifreader for reading image details
- github-markdown-css for github-ish styles

## Get started

```
yarn install

yarn start
```

## PDF Asset generation

<!-- wkhtmltopdf --disable-internal-links --print-media-type --user-style-sheet ./css/print.css http://localhost:8080/resume/ ./assets/resume.pdf -->

**NOTE: PDF asset generation is currently a manual process**, in the future it would be nice to add this to a github action or eleventy plugin.

Run the local dev server, then generate the resume PDF from HTML:

`yarn run generate-resume-pdf`

## 🚢 CI & Deployments

All handled in Github Actions automagically.
