import styles from "./Header.module.css";

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <h1 className={styles.title}>🇻🇪 Free-vzla</h1>
        <nav className={styles.nav}>
          <ul className={styles["nav-list"]}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/create">Create</Link>
            </li>
            <li>
              <Link href="/">Sign In</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
