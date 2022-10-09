import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Post as PostType } from "../types";

import Post from "../components/Post";
import PostGrid from "../components/PostGrid";

import { getAllPostsService } from "../services";

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllPostsService();
  return {
    props: {
      data,
    },
  };
};

const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const mockData = [
  //   { title: "First post", content: "This is some content" },
  //   { title: "Secont post", content: "McDonald's is selling yucas" },
  //   { title: "Final post", content: "Love to share my ideas" },
  //   { title: "A post", content: "Love to share my ideas" },
  //   { title: "Another post", content: "Love to express my thoughts with you guys" },
  //   { title: "Wow, look at this post", content: "I promise you won't regret it" },
  //   { title: "My experience at the mall", content: "So this is pretty cool..." },
  // ];
  return (
    <>
      <h2 className="subtitle">Home</h2>
      <PostGrid>
        {data.map((post: PostType, idx: number) => (
          <Post key={idx} title={post.title} content={post.content} />
        ))}
      </PostGrid>
    </>
  );
};

export default Home;
