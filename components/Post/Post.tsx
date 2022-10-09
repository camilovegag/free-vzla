import styles from "./Post.module.css";

const Post: React.FC = () => {
  return (
    <article className={styles.post}>
      <h2 className={styles.title}>Post title</h2>
      <p className={styles.content}>Post content</p>
    </article>
  );
};

export default Post;
