import { createTheme } from "@mui/material/styles";

import typography from "./typography";
import { darkPalette, lightPalette } from "./palette";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark" ? darkPalette : lightPalette),
    },
    typography,
  });