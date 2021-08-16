/**@jsx jsx*/
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/react";
import Seo from "./seo";
import Header from "./header";

export default function Layout({
  children,
  title = false,
  description = false,
}) {
  return (
    <Fragment>
      <Seo title={title} description={description} />
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: "border-box",
          },
          body: {
            fontFamily: theme.fonts.body,
            fontsize: 20,
            margin: 0,
          },
          a: {
            textDecoration: "none",
            color: theme.colors.text,

            ":focus": {
              color: theme.colors.primary,
            },
          },
          ".active": {
            color: theme.colors.primary,
            textDecoration: "underline",
          },
          ".logo": {
            color: theme.colors.primary,
          },
        })}
      />

      <Header />
      <main sx={{ mx: "auto", maxWidth: "1100", width: "75vw" }}>
        {children}
      </main>
    </Fragment>
  );
}
