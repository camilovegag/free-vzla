import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Post as PostType } from "../types";

import Post from "../components/Post";
import PostGrid from "../components/PostGrid";

import { getAllPostsService } from "../services";

export const getStaticProps: GetStaticProps = async () => {
  // const response = await getAllPostsService();
  const response = {
    data: [
      { title: "My post", content: "This is a really cool and censorship less post" },
    ],
  };
  return {
    props: {
      response,
    },
  };
};

const Home: NextPage = ({ response }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h2 className="subtitle">Home</h2>
      <PostGrid>
        {response?.data.map((post: PostType, idx: number) => (
          <Post
            key={idx}
            title={post.title}
            content={post.content}
            reference={post.title}
          />
        ))}
      </PostGrid>
    </>
  );
};

export default Home;
