/** @jsx jsx */
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/react";

import Seo from "../components/seo";
const Index = () => {
  return (
    <Fragment>
      <Seo title="Index" />
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: "border-box",
            margin: 0,
          },
        })}
      />
      <div
        sx={{
          color: "background",
          bg: "primary",
          fontFamily: "heading",
          p: 3,
        }}
      >
        <h1>Hello Word</h1>
        <p
          sx={{
            mx: "auto",
            maxWidth: 650,
            width: "90vw",
            letterSpacing: "caps",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea magnam,
          consequuntur at voluptatum asperiores recusandae fugit quidem maiores
          repudiandae facilis.
        </p>
      </div>
    </Fragment>
  );
};

export default Index;
