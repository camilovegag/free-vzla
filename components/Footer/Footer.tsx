import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <p>Four3Integrations © 2022</p>
      </section>
    </footer>
  );
};

export default Footer;
