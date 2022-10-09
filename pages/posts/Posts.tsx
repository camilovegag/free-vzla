import { NextPage } from "next";
import Post from "../../components/Post";
import PostGrid from "../../components/PostGrid";

const Posts: NextPage = () => {
  return (
    <>
      <h2 className="subtitle">My posts</h2>
      <PostGrid>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostGrid>
    </>
  );
};

export default Posts;
