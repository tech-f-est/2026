import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";
import { card } from "../utils.css";

export const pageTitle = style({
  fontSize: "2.5rem",
  fontWeight: "800",
  textAlign: "center",
  color: theme.foreground.default,
});

export const packs = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(290px, 1fr))",
  gap: theme.spacing.large,
  justifyContent: "center",

  "@media": {
    "(max-width: 1280px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const contactSection = style([
  card(),
  {
    textAlign: "center",
    padding: "3rem 1rem",
  },
]);

export const contactTitle = style({
  fontSize: "2rem",
  fontWeight: "700",
});

export const contactText = style({
  fontSize: "1.2rem",
});

export const contactLink = style({
  color: theme.foreground.contrast,
  fontWeight: "600",
  textDecoration: "none",
  transition: "all 0.2s ease",

  ":hover": {
    textDecoration: "underline",
  },
});
