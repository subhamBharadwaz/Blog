/** @jsx jsx */
import { jsx, useColorMode, IconButton } from "theme-ui";
import { MoonIcon } from "./svg/moon";
import { SunIcon } from "./svg/sun";

export default function ThemeToggle() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [colorMode, setColorMode] = useColorMode(prefersDark);

  const nextColorMode = colorMode === "light" ? "dark" : "light";

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={() => setColorMode(nextColorMode)}
      sx={{ cursor: "pointer" }}
    >
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
