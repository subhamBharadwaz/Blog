/**@jsx jsx */
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
export default function PostPreview({ title, abstract, key, slug }) {
  return (
    <Fragment>
      <div
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
          <h2 sx={{ m: 0 }}>
            <Link
              to={slug}
              sx={{
                ":hover,:focus": {
                  color: "primary",
                },
              }}
            >
              {title}
            </Link>
          </h2>
          <p>{abstract}</p>
        </li>
      </div>
    </Fragment>
  );
}
