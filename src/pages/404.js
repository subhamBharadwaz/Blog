/** @jsx jsx*/
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout>
      <h1>404 Page not found</h1>
      <p>
        <button
          sx={{
            appearance: "none",
            display: "inline-block",
            textAlign: "center",
            lineHeight: "inherit",
            textDecoration: "none",
            fontSize: "inherit",
            bg: "secondary",
            color: "text",
            m: 0,
            p: "md",
            fontWeight: "bold",
            border: 0,
            borderRadius: 4,
            variant: "buttons.primary",
          }}
        >
          <Link to="/">Back to Home</Link>
        </button>
      </p>
    </Layout>
  );
};

export default NotFound;
