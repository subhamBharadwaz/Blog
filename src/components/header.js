/**@jsx jsx*/
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Nav from "./nav";

export default function Header() {
  return (
    <header
      sx={{
        minHeight: "10vh",
        py: "sm",
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>
          <Link sx={{ color: "primary", transition: "ease" }} to="/">
            Subham
          </Link>
        </h3>
        <Nav />
      </div>
    </header>
  );
}
