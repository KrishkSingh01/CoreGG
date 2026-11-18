(function () {
  "use strict";
  var article = document.querySelector("[data-lore-entry-id]");
  var key = "coregg:lore-reading:v1";
  var modeKey = "coregg:lore-interface";
  var body = document.body;
  var picker = document.getElementById("lore-interface-picker");
  var switchButton = document.getElementById("lore-interface-switch");
  var cancel = document.getElementById("lore-picker-cancel");
  var selected = null;
  var returnFocus = null;
  function get(keyName) { try { return localStorage.getItem(keyName); } catch (error) { return null; } }
  function set(keyName, value) { try { localStorage.setItem(keyName, value); } catch (error) { /* Storage is optional. */ } }
  function choose(mode) {
    if (mode !== "archive" && mode !== "core") return;
    selected = mode; body.setAttribute("data-lore-interface", mode); set(modeKey, mode);
    picker.hidden = true; switchButton.setAttribute("aria-expanded", "false");
    if (returnFocus && returnFocus.focus) returnFocus.focus();
  }
  function openPicker() {
    returnFocus = document.activeElement; cancel.hidden = !selected; picker.hidden = false;
    switchButton.setAttribute("aria-expanded", "true");
    var first = picker.querySelector("[data-interface-choice]"); if (first) first.focus();
  }
  var storedMode = get(modeKey);
  if (storedMode === "archive" || storedMode === "core") { selected = storedMode; body.setAttribute("data-lore-interface", storedMode); picker.hidden = true; }
  else { picker.hidden = false; var firstChoice = picker.querySelector("[data-interface-choice]"); if (firstChoice) firstChoice.focus(); }
  if (switchButton) switchButton.setAttribute("aria-expanded", String(!picker.hidden));
  switchButton.addEventListener("click", openPicker);
  cancel.addEventListener("click", function () { picker.hidden = true; switchButton.setAttribute("aria-expanded", "false"); switchButton.focus(); });
  picker.addEventListener("click", function (event) { var choice = event.target.closest("[data-interface-choice]"); if (choice) choose(choice.getAttribute("data-interface-choice")); });
  picker.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && selected) { picker.hidden = true; switchButton.setAttribute("aria-expanded", "false"); switchButton.focus(); return; }
    if (event.key === "Tab") {
      var focusable = Array.from(picker.querySelectorAll("button:not([hidden])"));
      if (!focusable.length) return;
      var first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  if (!article) return;
  var image = article.querySelector(".lore-reader-image img");
  if (image) image.addEventListener("error", function () {
    var figure = image.closest("figure"); if (!figure) return; image.remove();
    var fallback = document.createElement("div"); fallback.className = "lore-image-fallback";
    var icon = document.createElement("span"); icon.setAttribute("aria-hidden", "true"); icon.textContent = "✧";
    var label = document.createElement("strong"); label.textContent = "No Visual Record Available";
    var note = document.createElement("small"); note.textContent = "Source notes are available below.";
    fallback.append(icon, label, note); figure.appendChild(fallback);
  }, { once: true });
  var id = article.getAttribute("data-lore-entry-id");
  var rafPending = false;
  function loadProgress() {
    try { var parsed = JSON.parse(localStorage.getItem(key) || "{}"); return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {}; }
    catch (error) { return {}; }
  }
  function saveProgress(value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { /* Reading progress is optional when storage is unavailable. */ } }
  function update() {
    rafPending = false;
    var scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var percent = Math.max(0, Math.min(100, Math.round((window.scrollY / scrollable) * 100)));
    var progress = loadProgress(); var current = progress[id] && Number(progress[id].percent) || 0;
    if (percent > current) { progress[id] = { percent: percent, updatedAt: new Date().toISOString() }; saveProgress(progress); }
    var amount = Math.max(current, percent); var meter = document.getElementById("lore-reading-progress");
    if (meter) meter.style.width = amount + "%";
    var label = document.getElementById("lore-reading-label");
    if (label) label.textContent = amount >= 85 ? "Record read" : "Reading progress · " + amount + "%";
  }
  function schedule() { if (rafPending) return; rafPending = true; window.requestAnimationFrame(update); }
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  window.addEventListener("pageshow", schedule, { once: true });
  update();
})();
