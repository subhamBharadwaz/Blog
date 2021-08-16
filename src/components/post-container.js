/**@jsx jsx */
import { Fragment } from "react";
import { jsx, Grid } from "theme-ui";
import { Link, useStaticQuery, graphql } from "gatsby";
import PostPreview from "./post-preview";

export default function PostContainer() {
  const data = useStaticQuery(graphql`
    query GetPostsQuery {
      allMdx(filter: { frontmatter: { isPublished: { eq: true } } }) {
        nodes {
          id
          slug
          frontmatter {
            title
            seoTitle
            abstract
            publishedOn(fromNow: true)
            isPublished
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;

  return (
    <ul
      sx={{
        m: 0,
        px: 3,
        py: 4,
      }}
    >
      <Grid>
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.frontmatter.title}
            abstract={post.frontmatter.abstract}
            slug={post.slug}
          />
        ))}
      </Grid>
    </ul>
  );
}
