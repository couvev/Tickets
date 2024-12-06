import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SportTickets</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#home" onClick={() => navigate("/")}>
            Início
          </a>
        </li>
        <li>
          <a href="#events" onClick={() => navigate("/eventos")}>
            Eventos
          </a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div className={styles.cta}>
        <button className={styles.ctaButton} onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          className={styles.ctaButtonCC}
          onClick={() => navigate("/signup")}
        >
          Criar Conta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
