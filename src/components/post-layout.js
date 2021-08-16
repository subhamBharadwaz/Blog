import * as React from "react";
import { Link } from "gatsby";
import Layout from "./layout";

export default function PostLayout({ children, pageContext }) {
  const { title, abstract } = pageContext.frontmatter;

  return (
    <Layout title={title} description={abstract}>
      {children}
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
