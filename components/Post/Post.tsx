import { PostProps } from "./Post.types";

import styles from "./Post.module.css";

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <article className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </article>
  );
};

export default Post;
