import { PostProps } from "./Post.types";

import styles from "./Post.module.css";

import Link from "next/link";

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <article className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      <Link className={styles.link} href="#">
        Read full post
      </Link>
    </article>
  );
};

export default Post;
