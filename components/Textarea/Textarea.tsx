import { TextareaProps } from "./Textarea.types";

import styles from "./Textarea.module.css";

const Textarea: React.FC<TextareaProps> = ({ placeholder, value, setValue }) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      rows={6}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Textarea;
