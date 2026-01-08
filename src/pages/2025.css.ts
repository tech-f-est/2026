import { style } from "@vanilla-extract/css";
import { card } from "../utils.css";
import { theme } from "../theme.css";

export const description = style([
  card(),
  {
    margin: 0,
    lineHeight: 1.8,
    textAlign: "justify",
  },
]);

export const video = style([
  card(),
  {
    width: "100%",
    aspectRatio: "16/10",
    padding: 0,
  },
]);

export const pictures = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing.large,
});

export const picture = style([
  card(),
  {
    padding: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
]);

export const link = style({ color: theme.foreground.accent });
