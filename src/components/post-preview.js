/**@jsx jsx */
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
export default function PostPreview({ title, abstract, key, slug }) {
  return (
    <Fragment>
      <Link
        to={slug}
        sx={{
          bg: "secondary",
          p: ["lg", null, "xl"],
          borderRadius: 8,
        }}
      >
        <li
          key={key}
          sx={{
            mb: 4,
            width: "100%",
          }}
        >
          <h2 sx={{ m: 0, fontFamily: "heading" }}>{title}</h2>
          <p sx={{ fontSize: 18, color: "text" }}>{abstract}</p>
        </li>
      </Link>
    </Fragment>
  );
}
