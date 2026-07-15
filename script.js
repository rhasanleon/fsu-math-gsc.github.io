const menuButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });
}

document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    window.alert(
      "Add the official FSU Mathematics GSC Instagram URL to this link in index.html."
    );
  });
});

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

/* ============================================================
   LIGHT / DARK / SYSTEM APPEARANCE
   ============================================================ */

const themeSelect = document.querySelector("#theme-select");
const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

let selectedTheme =
  localStorage.getItem("gsc-theme") || "system";

function resolveTheme(theme) {
  if (theme === "system") {
    return systemDarkMode.matches ? "dark" : "light";
  }

  return theme;
}

function applyTheme(theme, animate = false) {
  selectedTheme = theme;

  if (animate) {
    document.documentElement.classList.add("theme-transition");

    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 260);
  }

  document.documentElement.dataset.theme = resolveTheme(theme);
  document.documentElement.dataset.themePreference = theme;
  localStorage.setItem("gsc-theme", theme);

  if (themeSelect) {
    themeSelect.value = theme;
  }
}

applyTheme(selectedTheme);

if (themeSelect) {
  themeSelect.addEventListener("change", (event) => {
    applyTheme(event.target.value, true);
  });
}

function handleSystemAppearanceChange() {
  if (selectedTheme === "system") {
    applyTheme("system", true);
  }
}

if (typeof systemDarkMode.addEventListener === "function") {
  systemDarkMode.addEventListener(
    "change",
    handleSystemAppearanceChange
  );
} else if (typeof systemDarkMode.addListener === "function") {
  systemDarkMode.addListener(handleSystemAppearanceChange);
}
