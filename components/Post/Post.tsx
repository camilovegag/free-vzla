import { PostProps } from "./Post.types";

import styles from "./Post.module.css";

import Link from "next/link";

const Post: React.FC<PostProps> = ({ title, content, reference }) => {
  return (
    <article className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      {/* <p className={styles.link}>
        <Link href={`/posts/${reference}`}>Read full post</Link>
      </p> */}
    </article>
  );
};

export default Post;
