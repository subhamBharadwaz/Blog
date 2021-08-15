/**@jsx jsx*/
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Seo from "./seo";
import ThemeToggle from "./themeToggle";

export default function Layout({
  children,
  title = false,
  description = false,
}) {
  return (
    <Fragment>
      <Seo title={title} description={description} />
      <header>
        {title}
        <ThemeToggle />
        <nav>Blog</nav>
      </header>
      <main>{children}</main>
    </Fragment>
  );
}
