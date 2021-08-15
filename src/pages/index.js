/** @jsx jsx */
import { Fragment } from "react";
import { jsx } from "theme-ui";

const Index = () => {
  return (
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
        sx={{ mx: "auto", maxWidth: 650, width: "90vw", letterSpacing: "caps" }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea magnam,
        consequuntur at voluptatum asperiores recusandae fugit quidem maiores
        repudiandae facilis.
      </p>
    </div>
  );
};

export default Index;
