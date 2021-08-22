/**@jsx jsx*/
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Nav from "./nav";

export default function IndexHeader() {
  return (
    <header
      sx={{
        minHeight: "10vh",
        py: "sm",
        width: "100%",
        bg: "tertiary",
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
