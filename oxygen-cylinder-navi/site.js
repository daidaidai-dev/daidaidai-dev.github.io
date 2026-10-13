(() => {
  "use strict";
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const themeButton = document.querySelector(".theme-toggle");
  const isDark = () =>
    root.dataset.theme ? root.dataset.theme === "dark" : media.matches;
  const updateTheme = () => {
    themeButton?.setAttribute(
      "aria-label",
      isDark() ? "ライトモードに切り替える" : "ダークモードに切り替える",
    );
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark() ? "#102428" : "#ffffff");
  };
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener("click", () => {
      root.dataset.theme = isDark() ? "light" : "dark";
      try {
        localStorage.setItem("oxygen-navi-site-theme", root.dataset.theme);
      } catch {
        /* Display still updates. */
      }
      updateTheme();
    });
    media.addEventListener("change", updateTheme);
    updateTheme();
  }

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const closeMenu = () => {
    menu?.setAttribute("aria-expanded", "false");
    menu?.setAttribute("aria-label", "メニューを開く");
    nav?.classList.remove("is-open");
  };
  if (menu && nav) {
    menu.hidden = false;
    root.classList.add("has-menu");
    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute(
        "aria-label",
        open ? "メニューを閉じる" : "メニューを開く",
      );
      nav.classList.toggle("is-open", open);
    });
    nav
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menu.focus();
      }
    });
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !menu.contains(e.target)) closeMenu();
    });
    window
      .matchMedia("(min-width: 881px)")
      .addEventListener("change", closeMenu);
  }

  const deviceSwitch = document.querySelector(".device-switch");
  const screenLinks = [...document.querySelectorAll("[data-screen]")];
  if (deviceSwitch) {
    deviceSwitch.hidden = false;
    deviceSwitch.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const device = button.dataset.device;
        deviceSwitch
          .querySelectorAll("button")
          .forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
        screenLinks.forEach((link) => {
          const img = link.querySelector("img");
          const base = `./assets/screens/${device}-${link.dataset.screen}`;
          link.href = `${base}-960.webp`;
          img.src = `${base}-480.webp`;
          img.srcset = `${base}-480.webp 480w, ${base}-640.webp 640w, ${base}-960.webp 960w`;
          img.width = device === "ipad" ? 2064 : 1206;
          img.height = device === "ipad" ? 2752 : 2622;
          img.alt = img.alt.replace(
            /iPhone|iPad/,
            device === "ipad" ? "iPad" : "iPhone",
          );
        });
        document
          .querySelector(".screen-grid")
          .classList.toggle("is-ipad", device === "ipad");
      });
    });
  }

  const dialog = document.querySelector(".image-dialog");
  if (dialog && typeof dialog.showModal === "function") {
    let opener;
    screenLinks.forEach((link) =>
      link.addEventListener("click", (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        opener = link;
        const img = dialog.querySelector("img");
        img.src = link.href;
        img.alt = link.querySelector("img").alt;
        document.querySelector("#dialog-title").textContent = link
          .closest("article")
          .querySelector("h3").textContent;
        dialog.showModal();
        root.classList.add("dialog-open");
      }),
    );
    dialog
      .querySelector(".dialog-close")
      .addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      root.classList.remove("dialog-open");
      opener?.focus({ preventScroll: true });
    });
  }

  const share = document.querySelector(".share-button");
  if (share && (navigator.share || navigator.clipboard?.writeText)) {
    share.hidden = false;
    share.addEventListener("click", async () => {
      const url = document.querySelector('link[rel="canonical"]').href;
      const status = document.querySelector(".share-status");
      try {
        if (navigator.share)
          await navigator.share({
            title: "酸素ボンベ残量ナビ",
            text: "酸素の残り時間を、わかりやすく",
            url,
          });
        else {
          await navigator.clipboard.writeText(url);
          status.textContent = "ページのURLをコピーしました。";
        }
      } catch (error) {
        if (error.name !== "AbortError")
          status.textContent =
            "共有できませんでした。ブラウザーのアドレス欄からURLをコピーしてください。";
      }
    });
  }
})();
