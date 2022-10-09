import { PostGridProps } from "./PostGrid.types";

import styles from "./PostGrid.module.css";

const PostGrid: React.FC<PostGridProps> = ({ children }) => {
  return <section className={styles["post-grid"]}>{children}</section>;
};

export default PostGrid;
