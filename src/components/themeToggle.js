/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

export default function ThemeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  const nextColorMode = colorMode === "light" ? "dark" : "light";
  return (
    <div>
      <h1>Color mode is : {colorMode}</h1>
      <button onClick={() => setColorMode(nextColorMode)}>Click me</button>
      {colorMode === "light" ? <span>light</span> : <span>dark</span>}
    </div>
  );
}
