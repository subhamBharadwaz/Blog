/**@jsx jsx*/
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import ThemeToggle from "./themeToggle";

import React from "react";
export default function Nav() {
  return (
    <Fragment>
      <nav
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          activeClassName="active"
          sx={{
            mr: "5",
          }}
          to="/"
        >
          Home
        </Link>
        <Link activeClassName="active" to="/contact" sx={{ mr: "5" }}>
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </Fragment>
  );
}
