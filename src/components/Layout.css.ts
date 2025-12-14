import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  all: "unset",

  fontFamily: theme.font,

  margin: theme.spacing.large,

  colorScheme: "light",
  color: theme.foreground.default,
  background: theme.background.page,

  height: "100vh",

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.large,

  "@media": {
    "(max-width: 768px)": {
      margin: theme.spacing.medium,
    },
  },
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.large,
  paddingBottom: theme.spacing.large,

  width: `min(100vw - ${theme.spacing.large} * 2, 1280px)`,
  margin: "auto",

  "@media": {
    "(max-width: 768px)": {
      width: "auto",
      paddingBottom: theme.spacing.medium,
    },
  },
});
