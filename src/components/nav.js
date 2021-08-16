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
            mr: ["sm", "md", "lg", "xl"],
            fontWeight: "bold",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          activeClassName="active"
          to="/about"
          sx={{ mr: ["sm", "md", "lg", "xl"], fontWeight: "bold" }}
        >
          About
        </Link>
        <ThemeToggle />
      </nav>
    </Fragment>
  );
}
