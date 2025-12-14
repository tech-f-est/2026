import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const path = style({
  fill: "none",
  stroke: theme.foreground.accent,
  strokeWidth: 2,
});
