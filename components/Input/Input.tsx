import styles from "./Input.module.css";

import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ type, placeholder, value, setValue }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
