# Simple Custom Scroller

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/simple-custom-scroller/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 6.8-second screen recording.

## What the video shows

A tutorial titled **Simple Custom Scroller 🌱**, with:
- An HTML snippet for a `.container` and `.sub-div`.
- A scrollable sample content panel labelled "Custom Scrollbar".
- A CSS code panel demonstrating Firefox scrollbar styling and WebKit scrollbar pseudo-elements.
- A cyan scrollbar thumb over a dark navy track.
- Labels identifying Firefox and WebKit/Chrome support.

## Readable CSS transcribed from the video

```css
.sub-div {
  max-height: 100vh;
  overflow-y: scroll;
  scrollbar-color: #00c6ff #242942;
  overflow-x: hidden;
}

/* For Firefox */
.sub-div {
  scrollbar-width: thin;
}

/* For Chrome, Edge & Safari */
::-webkit-scrollbar {
  width: 1.2em;
  overflow-x: hidden;
}

::-webkit-scrollbar-track {
  background-color: #242942;
  margin-block: 0.25em;
  border-radius: 0.3em;
}

::-webkit-scrollbar-thumb {
  background-color: #00c6ff;
  border-radius: 0.3em;
}
```

## Features implemented

- Native scrollable text panel.
- Custom cyan scrollbar thumb and navy track in Chromium-based browsers and Safari.
- Firefox `scrollbar-color` and `scrollbar-width` support.
- Responsive tutorial layout.
- HTML and CSS syntax-highlighted code panels.
- Keyboard accessible scroll preview.
- No dependencies or build process.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
simple-custom-scroller/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Source accuracy

The CSS properties visible in the screen recording are transcribed as closely as legible. A few details were too small to read clearly; the remaining sample content and page layout are reconstructed to create a complete runnable demo.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
