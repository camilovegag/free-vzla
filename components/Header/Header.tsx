import styles from "./Header.module.css";

import Link from "next/link";

import { useWeb3 } from "@3rdweb/hooks";

const Header: React.FC = () => {
  const { address, connectWallet } = useWeb3();
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
              <Link href="#" onClick={() => connectWallet("injected")}>
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
