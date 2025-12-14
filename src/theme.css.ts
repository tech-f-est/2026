import { createTheme, fontFace, globalStyle } from "@vanilla-extract/css";

const dm = fontFace([
  {
    src: "url('/DMSans-Italic-VariableFont_opsz,wght.ttf')",
    fontStyle: "italic",
  },
  {
    src: "url('/DMSans-VariableFont_opsz,wght.ttf')",
    fontStyle: "normal",
  },
]);

export const [themeClass, theme] = createTheme({
  font: dm,
  spacing: {
    small: "8px",
    medium: "20px",
    large: "64px",
  },
  foreground: {
    default: "light-dark(#484cf5, white)",
    contrast: "light-dark(white, black)",
    accent: "light-dark(#484cf5, #484cf5)",
    dimmed: "light-dark(#7B7B7B, #6E6E6E)",
  },
  background: {
    page: "light-dark(#f7eded, black)",
    default: "light-dark(white, black)",
    element: "light-dark(#484cf5, #111111)",
  },
  transition: "all .2s cubic-bezier(.19,1,.22,1)",

  border: {
    default: "1px solid light-dark(white, black)",
    contrast: "1px solid light-dark(white, black)",
  },
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
});
