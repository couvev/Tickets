import React from "react";
import styles from "./LandPage.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function LandPage() {
  return (
    <div className={styles.landingPage}>
      <Navbar />

      <header className={styles.heroSection} id="home">
        <div className={styles.heroContent}>
          <h1>Bem-vindo ao SportTickets</h1>
          <p>Compre ingressos para os melhores eventos esportivos do mundo!</p>
          <a className={styles.heroButton} href="#events">
            Ver Eventos
          </a>
        </div>
      </header>

      <section className={styles.eventsSection} id="events">
        <h2>Próximos Eventos</h2>
        <div className={styles.eventsContainer}>
          <div className={styles.eventCard}>
            <img src="https://picsum.photos/300/200" alt="Evento 1" />
            <h3>Final da Champions League</h3>
            <p>Data: 01/07/2025</p>
            <button>Comprar</button>
          </div>
          <div className={styles.eventCard}>
            <img src="https://picsum.photos/300/200" alt="Evento 2" />
            <h3>NBA All-Star Game</h3>
            <p>Data: 15/02/2025</p>
            <button>Comprar</button>
          </div>
          <div className={styles.eventCard}>
            <img src="https://picsum.photos/300/200" alt="Evento 3" />
            <h3>Fórmula 1 - GP Brasil</h3>
            <p>Data: 20/11/2025</p>
            <button>Comprar</button>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <h2>Sobre Nós</h2>
        <p>
          A SportTickets nasceu com a missão de conectar fãs de esportes aos
          melhores eventos do mundo. Oferecemos uma plataforma fácil de usar,
          com segurança garantida e suporte dedicado. Aqui, o torcedor encontra
          ingressos oficiais para jogos, corridas e competições de todos os
          tipos.
        </p>
      </section>

      <section className={styles.contactSection} id="contact">
        <h2>Contato</h2>
        <p>Tem alguma dúvida? Entre em contato conosco!</p>
        <a
          className={styles.contactButton}
          href="mailto:contato@sporttickets.com"
        >
          Enviar E-mail
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default LandPage;
