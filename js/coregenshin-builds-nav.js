(function () {
  "use strict";

  document.documentElement.classList.add("cg-build-nav-js");
  const toggle = document.getElementById("coregenshinMenuToggle");
  const nav = document.getElementById("coregenshinPrimaryNav");
  const materialsButton = document.getElementById("materialsNavBtn");
  const materialsPanel = document.getElementById("materialsExperience");
  const archiveIntro = document.getElementById("archiveIntro");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close CoreGenshin navigation" : "Open CoreGenshin navigation");
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a") || event.target.closest("#materialsNavBtn")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open CoreGenshin navigation");
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open CoreGenshin navigation");
        toggle.focus();
      }
    });
  }

  function goToMaterials(shouldShow) {
    if (!materialsButton || !materialsPanel) return;
    const isShowing = !materialsPanel.classList.contains("hidden");
    if (isShowing !== shouldShow) materialsButton.click();
    if (shouldShow) {
      materialsPanel.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    } else if (archiveIntro) {
      archiveIntro.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
  }

  function characterFromHash() {
    if (!location.hash.startsWith("#character=")) return null;
    try {
      const requestedName = decodeURIComponent(location.hash.slice(11)).trim().toLowerCase();
      return characters.find(function (character) {
        return character.name.trim().toLowerCase() === requestedName;
      }) || null;
    } catch (error) {
      return null;
    }
  }

  function routeFromHash() {
    if (location.hash === "#materials") {
      if (typeof closeModal === "function") closeModal();
      goToMaterials(true);
      return;
    }

    const character = characterFromHash();
    if (character) {
      goToMaterials(false);
      if (typeof openModal === "function") openModal(character);
      return;
    }

    if (location.hash === "#builds") goToMaterials(false);
  }

  if (materialsButton && materialsPanel) {
    materialsButton.addEventListener("click", function () {
      const isShowing = !materialsPanel.classList.contains("hidden");
      const nextHash = isShowing ? "#materials" : "#builds";
      try {
        history.replaceState(null, "", location.pathname + location.search + nextHash);
      } catch (error) {
        location.hash = nextHash;
      }
    });
  }

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();
}());
