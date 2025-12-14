import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";
import { card } from "../utils.css";

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
  alignItems: "center",
});

export const title = style({
  fontSize: "3rem",
  fontWeight: "800",
  textAlign: "center",
});

export const subtitle = style({
  fontSize: "1.2rem",
  textAlign: "center",
  textWrap: "balance",
  maxWidth: 600,
  lineHeight: "1.6",
});

export const identity = style({
  display: "grid",
  // We use a 3 columns grid to keep all the content of the page aligned properly
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing.medium,

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const description = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
  gridColumn: "span 2",
});

export const paragraph = style({
  margin: 0,
  lineHeight: 1.8,
  // We align the paragraphs padding with the card's
  padding: "0 32px",
  textAlign: "justify",
});

export const highlightedParagraph = style([
  paragraph,
  card(),
  {
    // For some reason the card's padding is overridden by the paragraph's, so we rest it here
    padding: `${theme.spacing.medium} 32px`,
  },
]);

export const identityCard = style([
  card(),
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
]);

export const logo = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing.medium,
  width: "100%",
  maxWidth: 200,
});

export const name = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const values = style({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing.small,
  justifyContent: "center",
});

export const tag = style({
  padding: "0.5rem 1rem",
  backgroundColor: theme.background.default,
  color: theme.foreground.default,
  borderRadius: 99,
  fontSize: "0.9rem",
  fontWeight: "600",
});

export const objectives = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing.medium,
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const objective = style([
  card(),
  {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.medium,
  },
]);

export const objectiveTitle = style({
  fontSize: "1.2rem",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.small,
  margin: 0,
});

export const objectiveIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1lh",
  height: "1lh",
  borderRadius: "50%",
});

export const objectiveContent = style({
  fontSize: "1rem",
  lineHeight: "1.6",
  margin: 0,
});

export const ctaSection = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
  alignItems: "center",
  textAlign: "center",
});

export const ctaTitle = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  color: theme.foreground.default,
});

export const ctaButton = style({
  display: "inline-block",
  padding: "0.75rem 2rem",
  backgroundColor: theme.foreground.accent,
  color: theme.foreground.contrast,
  fontWeight: "600",
  borderRadius: 99,
  textDecoration: "none",
});
