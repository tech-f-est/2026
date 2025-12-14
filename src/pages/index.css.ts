import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  overflow: "auto",
  overflowX: "hidden",

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.large,
});

export const section = style({
  width: `min(100vw - ${theme.spacing.large} * 2, 800px)`,
  margin: "auto",

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,

  "@media": {
    "(max-width: 768px)": {
      width: "auto",
    },
  },
});

export const title = style({ fontSize: 42 });

export const details = style({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.medium,

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing.small,
    },
  },
});

export const pill = style({
  background: "light-dark(white, black)",
  borderRadius: 99,
  padding: `calc(${theme.spacing.small} / 2) calc(${theme.spacing.small} * 2)`,
});

export const description = style({
  width: `min(100vw - ${theme.spacing.large} * 2, 300px)`,
  margin: "auto",
  textWrap: "balance",
  textAlign: "center",
});
