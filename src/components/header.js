/**@jsx jsx*/
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Nav from "./nav";

export default function Header() {
  return (
    <header
      sx={{
        minHeight: "10vh",
        py: "md",
        width: "100%",
        bg: "background",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <div
        sx={{
          mx: "auto",
          maxWidth: "1100",
          width: ["90vw", "80vw", "75vw"],
          display: ["block", "flex", "flex"],
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          sx={{
            color: "primary",
            letterSpacing: 0.5,
            transition: "ease",
            mb: 0,
            fontWeight: "bold",
          }}
          to="/"
        >
          SUBHAM BHARADWAZ
        </Link>

        <Nav />
      </div>
    </header>
  );
}
