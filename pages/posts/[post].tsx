import type { NextPage } from "next";

import styles from "./Post.module.css";

import { useRouter } from "next/router";

const Post: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <h2 className={styles.back} onClick={() => router.back()}>
        ⬅️ <span className={styles.title}>Title</span>
      </h2>
      <p>Post extended content</p>
    </>
  );
};

export default Post;
