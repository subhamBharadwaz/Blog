/** @jsx jsx */
import { jsx, useColorMode, IconButton } from "theme-ui";
import { MoonIcon } from "./svg/moon";
import { SunIcon } from "./svg/sun";

export default function ThemeToggle() {
  const [colorMode, setColorMode] = useColorMode();

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
