# CoreGG

CoreGG is a small, static gaming site. Its Genshin Impact section is called CoreGenshin; the site also has Minecraft guides and a separate, source-linked Genshin lore archive.

## What’s here

- **CoreGenshin home** — character and element browsing, official update links, and shortcuts to the guides.
- **Builds and materials** — searchable character guides, build and team references, and a materials planner.
- **Lore archive** — 198 reading guides about Teyvat’s characters, books, places, history, and open questions. The archive has two visual interfaces, Teyvat Archive and Core Interface; both use the same records and reading progress.
- **Minecraft guides** — Java and Bedrock beginner guides, plus advanced playbooks for both editions. The main page also links to the guides and includes coordinate and stack calculators.
- **Privacy policy** — describes browser storage, external resources, and the pages that load the advertising tag.

The Lore archive is its own interface within the site. It has a separate header and design, and its entries can be opened as ordinary HTML pages.

## Project layout

All asset folders sit directly in this project folder.

- `css/` and `js/` hold the shared styles, browser code, and Lore data.
- `coregg-brand/`, `genshin-materials-columbina/`, and `minecraft-images/` hold the brand and game artwork.
- `lore-catalog-00-7f/` and `lore-catalog-80-ff/` hold the hash-sharded Lore covers; `lore-records/`, `lore-preview/`, and `lore-brand/` hold the other Lore images. Credits are in `lore-attribution.txt`.
- `columbina-media/` contains the materials planner videos.
- `lore-entries-01/` through `lore-entries-03/` contain the generated standalone Lore pages.
- `scripts/` contains the page builder, sitemap builder, static audit, and navigation smoke check.
- The project root contains the main pages, Cloudflare routing files, robots rules, and sitemap.

## Technology

The site uses HTML, CSS, browser JavaScript, and static JSON/JavaScript data. There is no framework or package installation step. Two Node.js scripts generate the Lore entry pages and sitemap.

## Preview locally

From the project folder, start a static server with Python:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000/>. Any static server that serves this folder works.

To regenerate the Lore pages and sitemap with Node.js:

```powershell
node scripts/build-lore-pages.cjs
node scripts/build-lore-sitemap.cjs
```

The Lore page script also accepts one entry ID when you only need to rebuild that record, for example `node scripts/build-lore-pages.cjs lore-descender`.

Before publishing, run `node scripts/audit-static-site.cjs` to check page metadata, local references, ad placement, and the sitemap.
`node scripts/test-coregenshin-navigation.cjs` smoke-tests the builds menu and its materials and character hash routes.

## Deployment

The site is deployed as static files on Cloudflare Pages. Publish the project folder as the site root; no bundler or build command is required for a normal deployment. If you change Lore data or generated pages, run the two Node.js commands above before publishing. `_redirects`, `_headers`, `robots.txt`, and the sitemap files are part of the deployed site.

## Credits and affiliation

HoYoverse owns Genshin Impact and its original game content. The Lore archive uses in-game quests, books, character stories, and item descriptions as its primary evidence, with source links in each guide; see the archive footer for source and image credits. The CoreGenshin guides credit their supplied character and game images in the site. Minecraft names and game content belong to Mojang Studios and Microsoft, and individual guide footers list the relevant image sources and attributions.

CoreGG and CoreGenshin are independent fan projects. They are not affiliated with or endorsed by HoYoverse or COGNOSPHERE PTE. LTD. The Minecraft guides are not official Minecraft products and are not affiliated with or endorsed by Mojang Studios or Microsoft.
