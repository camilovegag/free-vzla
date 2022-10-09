import { LayoutProps } from "./Layout.types";

import styles from "./Layout.module.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
