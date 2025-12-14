import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { card } from "../utils.css";
import { theme } from "../theme.css";

export const contact = style({
  all: "unset",
  display: "block",

  cursor: "pointer",
  textDecoration: "none",

  fontWeight: 500,
  textAlign: "center",

  padding: `${theme.spacing.small} calc(${theme.spacing.small} * 2)`,
  border: theme.border.contrast,
  background: theme.background.element,
  borderRadius: `calc(32px + ${theme.spacing.medium})`,

  transition: theme.transition,

  ":hover": {
    background: theme.foreground.accent,
  },
});

export const pack = style([
  card(),
  {
    transition: theme.transition,

    position: "relative",

    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.large,

    selectors: {
      [`&:has(${contact}:hover)`]: {
        boxShadow: [
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075)",
          "0 0 0 1px hsla(0, 0%, 0%, 0.05)",
          "0 0.3px 0.4px hsla(0, 0%, 0%, 0.02)",
          "0 0.9px 1.5px hsla(0, 0%, 0%, 0.045)",
          "0 3.5px 6px hsla(0, 0%, 0%, 0.09)",
        ].join(", "),
      },
    },

    "@media": {
      "(max-width: 1280px) and (min-width: 768px)": {
        padding: theme.spacing.large,
      },
    },
  },
]);

export const packTitle = style({
  fontSize: "2rem",
  fontWeight: "700",
  textAlign: "center",
});

export const price = style({
  fontWeight: "700",
  fontSize: "2.5em",
  textAlign: "center",

  selectors: {
    "&::after": {
      content: "HT",
      fontSize: "0.4em",
      verticalAlign: "super",
      marginLeft: "0.2rem",
      fontWeight: "500",
    },
  },
});

export const features = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const feature = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const featureLabel = style({
  fontWeight: "500",
});

export const featureValue = style({
  fontWeight: "600",
  borderRadius: "20px",
  fontSize: "0.9rem",
});

export const packBadge = style({
  position: "absolute",
  top: "-12px",
  right: "20px",
  backgroundColor: "light-dark(#6B8E23, #8FBC8F)",
  fontSize: "0.8rem",
  fontWeight: "600",
  padding: "0.25rem 0.75rem",
  borderRadius: "20px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
  letterSpacing: "0.02em",
});

export const packVariants = styleVariants({
  jaumont: {},
  bergamote: {},
  stanislas: {},
  venue: {},
});

export const recommendedBadge = style({
  position: "absolute",
  top: "-12px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "light-dark(white, black)",
  color: theme.foreground.accent,
  fontSize: "0.8rem",
  fontWeight: "700",
  padding: "0.3rem 1rem",
  borderRadius: "20px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
});

export const premiumBadge = style({
  position: "absolute",
  top: "-12px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "linear-gradient(135deg, #FF8C00, #E7680C)",
  color: "white",
  fontSize: "0.8rem",
  fontWeight: "700",
  padding: "0.3rem 1rem",
  borderRadius: "20px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
});

export const included = style({
  listStyle: "none",
  padding: 0,
  margin: 0,

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
});

export const name = style({
  fontWeight: 400,
  fontSize: "1.5em",
});

export const details = styleVariants({
  on: {},
  off: { color: theme.foreground.dimmed },
});
globalStyle(`${details.on} em`, {
  fontStyle: "normal",
  fontWeight: 700,
});
