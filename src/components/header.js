/**@jsx jsx*/
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Nav from "./nav";

export default function Header() {
  return (
    <Fragment>
      <header
        sx={{
          minHeight: "10vh",
          width: "100%",
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
              Subham Bharadwaz
            </Link>
          </h3>
          <Nav />
        </div>
      </header>
    </Fragment>
  );
}
