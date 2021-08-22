/**@jsx jsx*/
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        p: 32,
        mx: "auto",
        variant: "styles.footer",
        maxWidth: "1100",
        width: ["90vw", "80vw", "75vw"],
      }}
    >
      <Link to="/" sx={{ fontWeight: "bold" }}>
        Home
      </Link>
      <Link
        to="/about"
        sx={{ ml: ["sm", "md", "lg", "xl"], fontWeight: "bold" }}
      >
        About
      </Link>
      <div sx={{ mx: "auto" }} />
      <div sx={{ p: 2 }}>© 2021-present Subham Bharadwaz</div>
    </footer>
  );
}
