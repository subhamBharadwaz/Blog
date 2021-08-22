/**@jsx jsx */

import { jsx, Grid } from "theme-ui";
import { Link, useStaticQuery, graphql } from "gatsby";
import PostPreview from "./post-preview";

export default function PostContainer() {
  const data = useStaticQuery(graphql`
    query GetPostsQuery {
      allMdx(
        sort: { fields: frontmatter___publishedOn, order: DESC }
        limit: 6
        filter: { frontmatter: { isPublished: { eq: true } } }
      ) {
        nodes {
          frontmatter {
            abstract
            isPublished
            seoTitle
            title
            publishedOn(fromNow: true)
          }
          id
          slug
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;

  return (
    <ul
      sx={{
        m: 0,
        px: [0, 3, 3],
        py: 4,
      }}
    >
      <Grid columns={["auto", "500", "1fr 1fr"]} gap={32}>
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
