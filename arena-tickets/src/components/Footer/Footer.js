import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          © {new Date().getFullYear()} SportTickets. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
