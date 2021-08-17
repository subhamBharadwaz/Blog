/**@jsx jsx*/
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/react";

import Seo from "./seo";
import Header from "./header";
import Footer from "./footer";

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
            margin: 0,
            padding: 0,
          },

          a: {
            textDecoration: "none",
            color: theme.colors.text,
            transition: theme.transitions.ease,

            ":focus": {
              color: theme.colors.primary,
            },
            ":hover": {
              color: theme.colors.primary,
            },
          },
          ".active": {
            color: theme.colors.primary,
          },
          ".logo": {
            color: theme.colors.primary,
          },

          ul: {
            listStyle: "none",
          },
        })}
      />

      <Header />
      <main
        sx={{
          mx: "auto",
          py: 72,
          maxWidth: "1100",
          width: ["90vw", "80vw", "75vw"],
        }}
      >
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}
