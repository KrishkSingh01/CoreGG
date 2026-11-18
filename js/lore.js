(function () {
  "use strict";
  var data = window.COREGG_LORE_DATA;
  if (!data || !Array.isArray(data.entries)) return;

  var body = document.body;
  var picker = document.getElementById("lore-interface-picker");
  var cancelPicker = document.getElementById("lore-picker-cancel");
  var switchButton = document.getElementById("lore-interface-switch");
  var regionsRoot = document.getElementById("lore-regions");
  var categoriesRoot = document.getElementById("lore-categories");
  var cardsRoot = document.getElementById("lore-cards");
  var loadMoreButton = document.getElementById("lore-load-more");
  var siteShell = document.querySelector(".lore-site-shell");
  var recentRoot = document.getElementById("lore-recent-grid");
  var searchInput = document.getElementById("lore-search");
  var status = document.getElementById("lore-results-status");
  var emptyState = document.getElementById("lore-empty-state");
  var liveRegion = document.getElementById("lore-live-region");
  var selectedInterface = safeGet("coregg:lore-interface");
  var state = { region: "all", category: "all", query: "", sort: "title", limit: 24 };
  var readProgress = parseProgress(safeGet("coregg:lore-reading:v1"));
  var returnFocus = null;

  function safeGet(key) { try { return window.localStorage.getItem(key); } catch (error) { return null; } }
  function safeSet(key, value) { try { window.localStorage.setItem(key, value); return true; } catch (error) { return false; } }
  function parseProgress(value) {
    if (!value) return {};
    try { var parsed = JSON.parse(value); return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {}; }
    catch (error) { return {}; }
  }
  function escapeText(value) { return String(value == null ? "" : value); }
  function getRegion(id) { return data.regions.find(function (item) { return item.id === id; }); }
  function getCategory(id) { return data.categories.find(function (item) { return item.id === id; }); }
  function updateRegionBackdrop(regionId) {
    if (!siteShell) return;
    var region = regionId === "all" ? null : getRegion(regionId);
    var imagePath = region && typeof region.background === "string" && /^images\/lore\/[a-z0-9_./-]+\.(?:webp|png|jpe?g)$/i.test(region.background) ? region.background : "";
    siteShell.dataset.regionSelected = imagePath ? "true" : "false";
    if (imagePath) siteShell.style.setProperty("--lore-region-image", 'url("./' + imagePath + '")');
    else siteShell.style.removeProperty("--lore-region-image");
  }
  function countRead() { return Object.keys(readProgress).filter(function (id) { return readProgress[id] && Number(readProgress[id].percent) >= 85; }).length; }
  function updateReadSummary() {
    var readCount = countRead();
    var countNode = document.getElementById("lore-progress-count");
    var detailNode = document.getElementById("lore-progress-detail");
    if (countNode) countNode.textContent = readCount + (readCount === 1 ? " record read" : " records read");
    if (detailNode) detailNode.textContent = readCount ? "Saved on this device · " + data.entries.length + " records in the archive" : "Your reading progress stays on this device.";
  }
  function setInterface(name) {
    if (name !== "archive" && name !== "core") return;
    selectedInterface = name;
    body.setAttribute("data-lore-interface", name);
    safeSet("coregg:lore-interface", name);
    picker.hidden = true;
    if (switchButton) switchButton.setAttribute("aria-expanded", "false");
    liveRegion.textContent = name === "archive" ? "Teyvat Archive interface selected." : "Core Interface selected.";
    if (returnFocus && returnFocus.focus) returnFocus.focus();
  }
  function openPicker() {
    returnFocus = document.activeElement;
    cancelPicker.hidden = !selectedInterface;
    picker.hidden = false;
    switchButton.setAttribute("aria-expanded", "true");
    var firstChoice = picker.querySelector("[data-interface-choice]");
    if (firstChoice) firstChoice.focus();
  }
  if (selectedInterface === "archive" || selectedInterface === "core") {
    body.setAttribute("data-lore-interface", selectedInterface);
    picker.hidden = true;
  } else {
    selectedInterface = null;
    picker.hidden = false;
  }
  if (switchButton) switchButton.setAttribute("aria-expanded", String(!picker.hidden));
  picker.addEventListener("click", function (event) {
    var choice = event.target.closest("[data-interface-choice]");
    if (choice) { setInterface(choice.getAttribute("data-interface-choice")); return; }
  });
  picker.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && selectedInterface) { picker.hidden = true; switchButton.setAttribute("aria-expanded", "false"); switchButton.focus(); return; }
    if (event.key === "Tab") {
      var focusable = Array.from(picker.querySelectorAll("button:not([hidden])"));
      if (!focusable.length) return;
      var first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  switchButton.addEventListener("click", openPicker);
  cancelPicker.addEventListener("click", function () { picker.hidden = true; switchButton.setAttribute("aria-expanded", "false"); switchButton.focus(); });
  if (!selectedInterface) {
    var firstChoice = picker.querySelector("[data-interface-choice]");
    if (firstChoice) firstChoice.focus();
  }

  var heroImage = document.querySelector(".lore-hero-art img");
  if (heroImage) heroImage.addEventListener("error", function () {
    var figure = heroImage.closest("figure"); if (!figure) return; heroImage.remove();
    var fallback = document.createElement("div"); fallback.className = "lore-image-fallback lore-hero-image-fallback";
    var icon = document.createElement("span"); icon.setAttribute("aria-hidden", "true"); icon.textContent = "✧";
    var label = document.createElement("strong"); label.textContent = "Historical Record";
    fallback.append(icon, label); figure.insertBefore(fallback, figure.firstChild);
  }, { once: true });

  function renderRegions() {
    var html = '<button type="button" class="lore-region-card lore-region-all" data-region="all" aria-pressed="true"><span class="lore-region-card-name">All regions</span><span class="lore-region-card-meta">' + data.entries.length + ' records</span></button>';
    data.regions.forEach(function (region) {
      var count = data.entries.filter(function (entry) { return entry.region === region.id; }).length;
      html += '<button type="button" class="lore-region-card" data-region="' + escapeText(region.id) + '" aria-pressed="false"><span class="lore-region-card-name">' + escapeText(region.name) + '</span><span class="lore-region-card-meta">' + count + (count === 1 ? ' record' : ' records') + '</span></button>';
    });
    regionsRoot.innerHTML = html;
  }
  function categoryCount(categoryId) {
    return data.entries.filter(function (entry) {
      return entry.category === categoryId && (state.region === "all" || entry.region === state.region);
    }).length;
  }
  function renderCategories() {
    var html = '<button class="lore-category-button" type="button" data-category="all" aria-pressed="' + (state.category === "all") + '"><span>All records</span><span class="lore-category-count">' + data.entries.filter(function (entry) { return state.region === "all" || entry.region === state.region; }).length + '</span></button>';
    data.categories.forEach(function (category) {
      html += '<button class="lore-category-button" type="button" data-category="' + escapeText(category.id) + '" aria-pressed="' + (state.category === category.id) + '" title="' + escapeText(category.description) + '"><span>' + escapeText(category.name) + '</span><span class="lore-category-count">' + categoryCount(category.id) + '</span></button>';
    });
    categoriesRoot.innerHTML = html;
  }
  function matchesSearch(entry, query) {
    if (!query) return true;
    var region = getRegion(entry.region);
    var category = getCategory(entry.category);
    var terms = [entry.title, entry.summary, entry.category, category && category.name, region && region.name].concat(entry.keywords || [], entry.gameSources || []);
    return terms.join(" ").toLocaleLowerCase().indexOf(query) !== -1;
  }
  function getFilteredEntries() {
    var query = state.query.trim().toLocaleLowerCase();
    var entries = data.entries.filter(function (entry) {
      var regionMatch = query || state.region === "all" || entry.region === state.region;
      var categoryMatch = state.category === "all" || entry.category === state.category;
      return regionMatch && categoryMatch && matchesSearch(entry, query);
    });
    entries.sort(function (a, b) {
      if (state.sort === "recent") return String(b.addedOn || "").localeCompare(String(a.addedOn || "")) || a.title.localeCompare(b.title);
      return a.title.localeCompare(b.title);
    });
    return entries;
  }
  function createTag(classification) {
    var tag = document.createElement("span");
    tag.className = "lore-classification";
    tag.dataset.classification = classification;
    tag.textContent = classification === "canon" ? "Canon" : classification === "interpretation" ? "Interpretation" : "Theory";
    return tag;
  }
  function createImage(entry, className) {
    var figure = document.createElement("figure");
    figure.className = className;
    if (entry.image && entry.image.path) {
      var image = document.createElement("img");
      image.src = "./" + entry.image.path;
      image.alt = entry.image.alt || "Genshin Impact archive image";
      image.loading = "lazy";
      image.width = Number(entry.image.width) || 640;
      image.height = Number(entry.image.height) || 360;
      image.decoding = "async";
      image.addEventListener("error", function () { renderFallback(figure, "No Visual Record Available"); }, { once: true });
      figure.appendChild(image);
    } else {
      renderFallback(figure, "Archive Entry");
    }
    return figure;
  }
  function renderFallback(figure, label) {
    figure.textContent = "";
    var box = document.createElement("div");
    box.className = "lore-image-fallback";
    var mark = document.createElement("span");
    mark.setAttribute("aria-hidden", "true"); mark.textContent = "✧";
    var text = document.createElement("strong"); text.textContent = label;
    box.append(mark, text);
    figure.appendChild(box);
  }
  function makeEntryCard(entry) {
    var article = document.createElement("article");
    article.className = "lore-entry-card";
    article.dataset.entryId = entry.id;
    article.appendChild(createImage(entry, "lore-entry-image"));
    var content = document.createElement("div"); content.className = "lore-entry-card-body";
    var meta = document.createElement("div"); meta.className = "lore-entry-card-meta";
    var region = getRegion(entry.region); var category = getCategory(entry.category);
    var metaLabel = document.createElement("span"); metaLabel.textContent = (region ? region.name : "Teyvat") + " · " + (category ? category.name : "Archive");
    meta.append(metaLabel, createTag(entry.classification));
    if (entry.bookDetails && entry.bookDetails.volumeCount) { var volumes = document.createElement("small"); volumes.className = "lore-book-volume"; volumes.textContent = entry.bookDetails.volumeCount + (entry.bookDetails.volumeCount === 1 ? " volume" : " volumes"); meta.appendChild(volumes); }
    var heading = document.createElement("h4");
    var link = document.createElement("a"); link.href = "./lore/entries/" + entry.slug + ".html"; link.textContent = entry.title; heading.appendChild(link);
    var summary = document.createElement("p"); summary.textContent = entry.summary;
    var more = document.createElement("a"); more.className = "lore-entry-card-link"; more.href = link.href; more.textContent = "Read this record "; var arrow = document.createElement("span"); arrow.setAttribute("aria-hidden", "true"); arrow.textContent = "→"; more.appendChild(arrow);
    if (readProgress[entry.id] && Number(readProgress[entry.id].percent) >= 85) { var read = document.createElement("small"); read.className = "lore-read-mark"; read.textContent = "Read"; more.prepend(read); }
    content.append(meta, heading, summary, more); article.appendChild(content); return article;
  }
  function renderCards() {
    var entries = getFilteredEntries();
    cardsRoot.replaceChildren();
    var visibleEntries = entries.slice(0, state.limit);
    visibleEntries.forEach(function (entry) { cardsRoot.appendChild(makeEntryCard(entry)); });
    if (loadMoreButton) {
      var remaining = entries.length - visibleEntries.length;
      loadMoreButton.hidden = remaining <= 0;
      loadMoreButton.textContent = remaining > 0 ? "Show more records · " + remaining + " left" : "";
    }
    var hasEntries = entries.length > 0;
    emptyState.hidden = hasEntries;
    cardsRoot.hidden = !hasEntries;
    var activeRegion = state.region === "all" ? "All regions" : (getRegion(state.region) || {}).name || "All regions";
    var activeCategory = state.category === "all" ? "All records" : (getCategory(state.category) || {}).name || "All records";
    document.getElementById("lore-current-region").textContent = state.query ? "Search across all regions" : activeRegion;
    document.getElementById("lore-current-collection").textContent = activeCategory;
    var description = state.query ? "Showing matching records from every region." : state.category === "books-literature" ? "Browsing " + entries.length + " indexed book and written-record entries. Some titles or volumes may not be obtainable; full book text is not copied. Each record links to its source." : (state.region === "all" ? "Choose a collection or search all records." : (getRegion(state.region) || {}).note || "Records from this region.");
    document.getElementById("lore-archive-description").textContent = description;
    status.textContent = entries.length + (entries.length === 1 ? " record" : " records") + (state.query ? " match your search." : " in this view.") + (entries.length > visibleEntries.length ? " Showing " + visibleEntries.length + " at a time." : "");
  }
  function renderRecent() {
    recentRoot.replaceChildren();
    data.entries.slice().sort(function (a, b) { return String(b.addedOn || "").localeCompare(String(a.addedOn || "")) || b.title.localeCompare(a.title); }).slice(0, 4).forEach(function (entry) {
      var card = document.createElement("a"); card.className = "lore-recent-card"; card.href = "./lore/entries/" + entry.slug + ".html";
      var region = getRegion(entry.region); var label = document.createElement("small"); label.textContent = (region ? region.name : "Teyvat") + " · Added " + formatDate(entry.addedOn);
      var title = document.createElement("strong"); title.textContent = entry.title;
      var arrow = document.createElement("span"); arrow.textContent = "Open archive record →";
      card.append(label, title, arrow); recentRoot.appendChild(card);
    });
  }
  function formatDate(value) { var date = new Date(value + "T00:00:00Z"); return Number.isNaN(date.getTime()) ? "recently" : date.toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }); }
  regionsRoot.addEventListener("click", function (event) {
    var button = event.target.closest("[data-region]"); if (!button) return;
    state.region = button.dataset.region; state.limit = 24; updateRegionBackdrop(state.region); regionsRoot.querySelectorAll("[data-region]").forEach(function (item) { item.setAttribute("aria-pressed", String(item === button)); });
    renderCategories(); renderCards();
  });
  categoriesRoot.addEventListener("click", function (event) {
    var button = event.target.closest("[data-category]"); if (!button) return;
    state.category = button.dataset.category; state.limit = 24; renderCategories(); renderCards();
  });
  var searchForm = document.getElementById("lore-search-form");
  searchForm.addEventListener("submit", function (event) { event.preventDefault(); state.query = searchInput.value.trim(); state.sort = "title"; state.limit = 24; renderCategories(); renderCards(); document.getElementById("archive").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }); });
  searchInput.addEventListener("input", function () { state.query = searchInput.value.trim(); state.sort = "title"; state.limit = 24; renderCategories(); renderCards(); });
  document.getElementById("lore-recent-button").addEventListener("click", function (event) { state.sort = state.sort === "recent" ? "title" : "recent"; state.limit = 24; event.currentTarget.textContent = state.sort === "recent" ? "Sort by title" : "Recently added"; renderCards(); });
  document.getElementById("lore-random-button").addEventListener("click", function () { var choices = getFilteredEntries(); if (!choices.length) choices = data.entries.slice(); var entry = choices[Math.floor(Math.random() * choices.length)]; if (entry) window.location.href = "./lore/entries/" + entry.slug + ".html"; });
  document.getElementById("lore-clear-filters").addEventListener("click", function () { state.region = "all"; state.category = "all"; state.query = ""; state.sort = "title"; state.limit = 24; searchInput.value = ""; updateRegionBackdrop("all"); regionsRoot.querySelectorAll("[data-region]").forEach(function (item) { item.setAttribute("aria-pressed", String(item.dataset.region === "all")); }); renderCategories(); renderCards(); });
  if (loadMoreButton) loadMoreButton.addEventListener("click", function () { state.limit += 24; renderCards(); });
  updateReadSummary(); renderRegions(); updateRegionBackdrop(state.region); renderCategories(); renderCards(); renderRecent();
  var params = new URLSearchParams(window.location.search);
  if (params.has("q")) { searchInput.value = params.get("q"); state.query = searchInput.value.trim(); state.limit = 24; renderCategories(); renderCards(); }
})();
