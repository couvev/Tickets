import React, { useRef } from "react";
import styles from "./LandPage.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function LandPage() {
  const events = [
    {
      img: "https://picsum.photos/300/200",
      title: "Final da Champions League",
      date: "01/07/2025",
    },
    {
      img: "https://picsum.photos/300/200",
      title: "NBA All-Star Game",
      date: "15/02/2025",
    },
    {
      img: "https://picsum.photos/300/200",
      title: "Fórmula 1 - GP Brasil",
      date: "20/11/2025",
    },
    {
      img: "https://picsum.photos/300/200",
      title: "Evento 4",
      date: "10/08/2025",
    },
    {
      img: "https://picsum.photos/300/200",
      title: "Evento 5",
      date: "25/09/2025",
    },
    {
      img: "https://picsum.photos/300/200",
      title: "Evento 6",
      date: "05/10/2025",
    },
    {
      img: "https://picsum.photos/300/200",
      title: "Evento 7",
      date: "12/12/2025",
    },
  ];

  const eventsContainerRef = useRef(null);

  const cardWidth = 300;
  const gap = 20;

  const scrollNext = () => {
    const container = eventsContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const container = eventsContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
  };

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
        <div className={styles.carouselWrapper}>
          <button className={styles.arrowButton} onClick={scrollPrev}>
            &#10094;
          </button>
          <div className={styles.eventsContainer} ref={eventsContainerRef}>
            {events.map((event, index) => (
              <div className={styles.eventCard} key={index}>
                <img src={event.img} alt={event.title} />
                <h3>{event.title}</h3>
                <p>Data: {event.date}</p>
                <button>Comprar</button>
              </div>
            ))}
          </div>
          <button className={styles.arrowButton} onClick={scrollNext}>
            &#10095;
          </button>
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <h2>Sobre Nós</h2>
        <p>
          A SportTickets nasceu com a missão de conectar fãs de esportes aos
          melhores eventos do mundo. Oferecemos uma plataforma fácil de usar,
          com segurança garantida e suporte dedicado.
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
