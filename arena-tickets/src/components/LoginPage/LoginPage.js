import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica de autenticação
    console.log("Tentando fazer login com:", username, password);
  };

  return (
    <div className="pageWrapper">
      <Navbar />
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2>Fazer Login</h2>
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Seu usuário"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha"
                required
              />
            </div>
            <button type="submit" className={styles.loginButton}>
              Entrar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
