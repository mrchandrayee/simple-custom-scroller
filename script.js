// The preview uses native browser scrolling so the custom scrollbar
// is rendered by Firefox's scrollbar-color/scrollbar-width rules and
// by WebKit's ::-webkit-scrollbar pseudo-elements in Chromium/Safari.

const preview = document.querySelector(".preview-scroll");

// Keep the sample panel keyboard-friendly and show a small scroll hint
// only when the user interacts with it.
preview.addEventListener("scroll", () => {
  preview.classList.toggle("has-scrolled", preview.scrollTop > 0);
}, { passive: true });
