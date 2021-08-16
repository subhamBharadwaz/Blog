/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import PostContainer from "../components/post-container";

const Index = () => {
  return (
    <Layout title="My Blog" description="hi everyone">
      <h1>Hello world!</h1>

      <PostContainer />
    </Layout>
  );
};

export default Index;
