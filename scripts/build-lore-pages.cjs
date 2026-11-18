"use strict";
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const { entries, regions, categories, site } = require(path.join(root, "js", "lore-data.js"));
const longFormGuides = require(path.join(root, "js", "lore-article-content.js"));
const esc = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const json = (value) => JSON.stringify(value).replace(/</g, "\\u003c");
const regionName = (id) => (regions.find((item) => item.id === id) || {}).name || "Teyvat & Unknown";
const categoryName = (id) => (categories.find((item) => item.id === id) || {}).name || "Archive Entry";
const titleCase = (text) => text ? text[0].toUpperCase() + text.slice(1) : "Canon";
const anchorId = (text) => String(text).toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section";
const sourceLinks = (entry) => {
  const sources = [entry.source].concat(entry.extraSources || []);
  if (entry.bookDetails) sources.push(
    { label: "HoYoWiki · Books index", url: "https://wiki.hoyolab.com/pc/genshin/aggregate/book?crawler=Googlebot&game_id=" },
    { label: "HoYoverse · In-game Books Archive", url: "https://genshin.hoyoverse.com/en/news/detail/103753" }
  );
  return [...new Map(sources.filter(Boolean).map((source) => [source.url, source])).values()].map((source) => `<li><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)} <span aria-hidden="true">↗</span></a></li>`).join("");
};
const gameSources = (entry) => (entry.gameSources || []).map((item) => `<li>${esc(item)}</li>`).join("");
const relatedEntries = (entry) => entries.filter((item) => item.id !== entry.id && (item.region === entry.region || item.category === entry.category)).slice(0, 3);
const buildPicker = `<div class="lore-interface-picker" id="lore-interface-picker" role="dialog" aria-modal="true" aria-labelledby="lore-picker-title" hidden>
  <div class="lore-picker-backdrop" aria-hidden="true"></div><div class="lore-picker-panel"><p class="lore-kicker">Choose your reading experience</p><h2 id="lore-picker-title">Two ways to explore Teyvat</h2><p class="lore-picker-lede">Both interfaces use the same records and saved reading progress. You can switch styles any time.</p>
  <div class="lore-picker-options"><button class="lore-picker-option" type="button" data-interface-choice="archive"><span class="lore-preview lore-preview-archive" aria-hidden="true"><span class="lore-preview-top">TEYVAT ARCHIVE</span><span class="lore-preview-art"></span><span class="lore-preview-line"></span><span class="lore-preview-line short"></span><span class="lore-preview-card"></span></span><span class="lore-picker-option-title"><span>INTERFACE 01</span><strong>Teyvat Archive</strong><small>Deep navy, fine gold borders, and a quiet library feel.</small></span><span class="lore-picker-choose">Choose this interface <span aria-hidden="true">→</span></span></button><button class="lore-picker-option" type="button" data-interface-choice="core"><span class="lore-preview lore-preview-core" aria-hidden="true"><span class="lore-preview-top">COREGG / LORE</span><span class="lore-preview-orbit"><i></i><i></i><b>CORE</b></span><span class="lore-preview-line"></span><span class="lore-preview-line short"></span><span class="lore-preview-card"></span></span><span class="lore-picker-option-title"><span>INTERFACE 02</span><strong>Core Interface</strong><small>CoreGG’s futuristic blue background and golden accents.</small></span><span class="lore-picker-choose">Choose this interface <span aria-hidden="true">→</span></span></button></div><button class="lore-picker-cancel" id="lore-picker-cancel" type="button" hidden>Keep my current interface</button><p class="lore-picker-note">Your choice is saved in this browser when storage is available.</p></div></div><div class="lore-visually-hidden" id="lore-live-region" aria-live="polite" aria-atomic="true"></div>`;
function makePage(entry) {
  const canonical = site.baseUrl + "/lore/entries/" + entry.slug + ".html";
  const imagePath = entry.image ? "../../" + entry.image.path : "";
  const imageMarkup = entry.image
    ? `<figure class="lore-reader-image"><img src="${esc(imagePath)}" width="${esc(entry.image.width || 1200)}" height="${esc(entry.image.height || 675)}" alt="${esc(entry.image.alt)}" loading="eager" decoding="async"><figcaption>${esc(entry.image.credit || "Genshin Impact Wiki / HoYoverse")} · <a href="${esc(entry.image.sourceUrl)}" target="_blank" rel="noopener noreferrer">image source</a></figcaption></figure>`
    : `<figure class="lore-reader-image lore-reader-image-empty"><div class="lore-image-fallback"><span aria-hidden="true">✧</span><strong>No Visual Record Available</strong><small>Source notes are available below.</small></div></figure>`;
  const related = relatedEntries(entry).map((item) => `<a class="lore-related-card" href="./${esc(item.slug)}.html"><small>${esc(regionName(item.region))} · ${esc(categoryName(item.category))}</small><strong>${esc(item.title)}</strong><span>Read this record →</span></a>`).join("");
  const articleJson = { "@context":"https://schema.org", "@type":"Article", headline:entry.title, description:entry.summary, datePublished:entry.addedOn, dateModified:entry.updatedOn || entry.addedOn, mainEntityOfPage:{"@type":"WebPage","@id":canonical}, author:{"@type":"Organization",name:"CoreGG"}, publisher:{"@type":"Organization",name:"CoreGG",url:site.baseUrl}, isBasedOn:entry.source.url, inLanguage:"en" };
  if (entry.image) articleJson.image = site.baseUrl + "/" + entry.image.path;
  const crumbs = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
    {"@type":"ListItem",position:1,name:"CoreGG",item:site.baseUrl+"/"},
    {"@type":"ListItem",position:2,name:"CoreGenshin",item:site.baseUrl+"/coregenshin"},
    {"@type":"ListItem",position:3,name:"Lore Archive",item:site.baseUrl+"/lore.html"},
    {"@type":"ListItem",position:4,name:entry.title,item:canonical}
  ] };
  const guide = longFormGuides[entry.title];
  const guideSections = guide || (entry.bookDetails ? [
    { heading: "About this title", paragraphs: [entry.summary] },
    { heading: "What the record establishes", paragraphs: [
      `${entry.title} is catalogued as a ${entry.bookDetails.recordType || "written record"} associated with ${regionName(entry.region)}${entry.bookDetails.author ? ` and attributed in the archive to ${entry.bookDetails.author}` : ""}${entry.bookDetails.volumeCount ? `; the record lists ${entry.bookDetails.volumeCount} volumes` : ""}. These catalog details tell us where the text belongs in the game’s archive, but do not by themselves prove that every event it describes is literal history.`,
      "Read the narrator, author, and context carefully. Teyvat’s books include fiction, oral traditions, research notes, and historical accounts. Compare their claims with quests, character stories, and item descriptions before treating an account as confirmed fact."
    ] },
    { heading: "Where to read the original wording", paragraphs: [
      "For the complete in-game text, check the Books section of the in-game Archive or the inventory and quest record where this title was collected. The source link below opens the community reference page used to verify the title and its catalog details; it is not a HoYoverse publication."
    ] }
  ] : [{ heading: "Record guide", paragraphs: entry.body }]);
  const toc = guideSections.length > 2 ? `<nav class="lore-article-toc" aria-label="On this page"><strong>On this page</strong><ol>${guideSections.map((section) => `<li><a href="#guide-${anchorId(section.heading)}">${esc(section.heading)}</a></li>`).join("")}</ol></nav>` : "";
  const guideMarkup = guideSections.map((section) => `<section class="lore-guide-section" id="guide-${anchorId(section.heading)}"><h2>${esc(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}</section>`).join("\n");
  const visibleSummary = esc(entry.summary);
  const metaSummary = String(entry.summary || "").length > 160 ? String(entry.summary).slice(0, 157).replace(/\s+\S*$/, "") + "…" : String(entry.summary || "");
  const description = esc(metaSummary);
  const bookFacts = entry.bookDetails ? `<div><dt>Record type</dt><dd>${esc(entry.bookDetails.recordType || "Written record")}</dd></div>${entry.bookDetails.volumeCount ? `<div><dt>Volumes</dt><dd>${esc(entry.bookDetails.volumeCount)}</dd></div>` : ""}${entry.bookDetails.author ? `<div><dt>Author</dt><dd>${esc(entry.bookDetails.author)}</dd></div>` : ""}` : "";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#0b1424">
  <meta name="description" content="${description}"><meta name="robots" content="index,follow,max-image-preview:large">
  <title>${esc(entry.title)} | Genshin Impact Lore | CoreGG</title><link rel="canonical" href="${canonical}">
  <meta property="og:type" content="article"><meta property="og:site_name" content="CoreGG"><meta property="og:title" content="${esc(entry.title)} | CoreGG Teyvat Lore Archive"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical}">
  ${entry.image ? "<meta property=\"og:image\" content=\"" + site.baseUrl + "/" + esc(entry.image.path) + "\"><meta property=\"og:image:alt\" content=\"" + esc(entry.image.alt) + "\">" : ""}
  <meta name="twitter:card" content="${entry.image ? "summary_large_image" : "summary"}"><meta name="twitter:title" content="${esc(entry.title)}"><meta name="twitter:description" content="${description}">
  <link rel="icon" href="../../images/lore/coregg-lore-mark.svg" type="image/svg+xml"><link rel="stylesheet" href="../../css/coregg-lore.css">
  <script type="application/ld+json">${json(articleJson)}</script><script type="application/ld+json">${json(crumbs)}</script>
  <script src="../../js/lore-entry.js" defer></script>
</head>
<body class="lore-site" data-lore-interface="archive">
  <a class="lore-skip-link" href="#lore-entry-content">Skip to the lore record</a><div class="lore-site-shell">
  <main id="lore-entry-content" class="lore-reader" data-lore-entry-id="${esc(entry.id)}">
    <nav class="lore-reader-crumbs" aria-label="Breadcrumb"><a href="../../lore.html#home">CoreGG Lore</a><span aria-hidden="true">/</span><span>${esc(regionName(entry.region))}</span><span aria-hidden="true">/</span><span>${esc(categoryName(entry.category))}</span></nav>
    <article class="lore-reader-article">
      <header class="lore-reader-header"><p class="lore-kicker">${esc(regionName(entry.region))} · ${esc(categoryName(entry.category))}</p><h1>${esc(entry.title)}</h1><p class="lore-reader-summary">${visibleSummary}</p><div class="lore-reader-label-row"><span class="lore-classification" data-classification="${esc(entry.classification)}">${esc(titleCase(entry.classification))}</span><span id="lore-reading-label">Reading progress · 0%</span><time datetime="${esc(entry.addedOn)}">Added to the archive ${esc(entry.addedOn)}</time></div><div class="lore-reading-track" aria-hidden="true"><span id="lore-reading-progress"></span></div></header>
      ${imageMarkup}
      <div class="lore-reader-columns"><div class="lore-reader-body">${toc}${guideMarkup}<p class="lore-source-caution">This is an original CoreGG reading guide, not an official HoYoverse article or a reproduction of the game text. Source links below identify the records used so you can check the original context.</p></div><aside class="lore-reader-factbox"><h2>Record details</h2><dl><div><dt>Region</dt><dd>${esc(regionName(entry.region))}</dd></div><div><dt>Collection</dt><dd>${esc(categoryName(entry.category))}</dd></div><div><dt>Status</dt><dd>${esc(titleCase(entry.classification))}</dd></div>${bookFacts}</dl><h3>In-game references</h3><ul>${gameSources(entry)}</ul></aside></div>
      <section class="lore-citation-section" aria-labelledby="lore-source-heading"><h2 id="lore-source-heading">Sources &amp; references</h2><p>Check these sources for the original game text and reference trail.</p><ul>${sourceLinks(entry)}</ul></section>
      <section class="lore-related-section" aria-labelledby="lore-related-heading"><h2 id="lore-related-heading">Related lore</h2><div class="lore-related-grid">${related || "<p>More related records will appear as the archive grows.</p>"}</div></section>
    </article>
  </main>
  <footer class="lore-footer"><div class="lore-footer-main"><section class="lore-footer-brand"><a href="../../lore.html#home" class="lore-footer-logo">COREGG <span>LORE ARCHIVE</span></a><p>An independent gaming archive exploring the worlds, stories and details of Genshin Impact.</p><small>© 2026 CoreGG. Original archive reading guides and website design.</small></section><nav class="lore-footer-column" aria-label="Explore"><h2>Explore</h2><a href="../../lore.html#home">Home</a><a href="../../lore.html#archive">Teyvat Archive</a><a href="../../index.html">Back to CoreGG</a></nav><nav class="lore-footer-column" aria-label="Resources"><h2>Resources</h2><a href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki" target="_blank" rel="noopener noreferrer">Genshin Wiki</a><a href="https://wiki.hoyolab.com/pc/genshin/aggregate/book?crawler=Googlebot&amp;game_id=" target="_blank" rel="noopener noreferrer">HoYoWiki · Books</a><a href="../../lore.html#references">Sources &amp; References</a><a href="../../lore.html#about">About the Archive</a><a href="https://www.buymeacoffee.com/otaku_krishna" target="_blank" rel="noopener noreferrer">Support CoreGG</a><a href="https://www.instagram.com/otaku_krishna1/" target="_blank" rel="noopener noreferrer">Support &amp; Feedback</a></nav><section class="lore-footer-credits"><h2>Credits</h2><p>Genshin Impact Wiki / Fandom is credited for referenced information and linked image sources. HoYoverse created Genshin Impact and its original game content. CoreGG created this archive’s original design, organization, and reading guides.</p><p class="lore-disclaimer">CoreGG is an independent fan-made project and is not affiliated with, endorsed by or sponsored by HoYoverse. Genshin Impact and its associated characters, artwork and assets belong to their respective rights holders.</p></section></div><div class="lore-footer-bottom"><span>Built for curious Travelers</span><a href="../../privacy.html">Privacy policy</a></div><script async="async" data-cfasync="false" src="https://bauval.org/21/85e2c64c52b450fcf94f916544cdd28b"></script><div id="container-85e2c64c52b450fcf94f916544cdd28b"></div></footer>
  </div>${buildPicker}
</body></html>`;
}
for (const entry of entries) {
  const destination = path.join(root, "lore", "entries", entry.slug + ".html");
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, makePage(entry), "utf8");
}
console.log("Generated " + entries.length + " source-linked lore pages.");
