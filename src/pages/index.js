/** @jsx jsx */
import { jsx } from "theme-ui";
import IndexLayout from "../components/indexLayout";
import PostContainer from "../components/post-container";

const Index = () => {
  return (
    <IndexLayout title="My Blog" description="hi everyone">
      <h2 sx={{ color: "primary" }}>Recent Posts</h2>

      <PostContainer />
    </IndexLayout>
  );
};

export default Index;
