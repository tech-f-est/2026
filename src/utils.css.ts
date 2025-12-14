import { recipe } from "@vanilla-extract/recipes";
import { theme } from "./theme.css";

export const card = recipe({
  base: {
    padding: `${theme.spacing.medium} 32px`,
    borderRadius: 32,

    background: theme.background.element,
    color: theme.foreground.contrast,
  },
});
