import React, { useState } from "react";
import styles from "./EventosPage.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const EventosPage = () => {
  const [tab, setTab] = useState("ativos");

  const eventosAtivos = [
    {
      id: 1,
      nome: "Final da Champions League",
      data: "01/07/2025",
      imagem: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      nome: "NBA Finals Jogo 7",
      data: "20/06/2025",
      imagem: "https://via.placeholder.com/300x200",
    },
    {
      id: 9,
      nome: "Final da Champions League",
      data: "01/07/2025",
      imagem: "https://via.placeholder.com/300x200",
    },
    {
      id: 8,
      nome: "NBA Finals Jogo 7",
      data: "20/06/2025",
      imagem: "https://via.placeholder.com/300x200",
    },
  ];

  const eventosEncerrados = [
    {
      id: 3,
      nome: "Fórmula 1 - GP Brasil",
      data: "20/11/2024",
      imagem: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      nome: "Copa do Mundo - Final",
      data: "18/12/2022",
      imagem: "https://via.placeholder.com/300x200",
    },
  ];

  const eventosExibidos = tab === "ativos" ? eventosAtivos : eventosEncerrados;

  return (
    <div className={styles.eventosPage}>
      <Navbar />
      <div className={styles.container}>
        <h1>Eventos</h1>
        <div className={styles.buttonGroup}>
          <button
            className={tab === "ativos" ? styles.activeTab : ""}
            onClick={() => setTab("ativos")}
          >
            Ativos
          </button>
          <button
            className={tab === "encerrados" ? styles.activeTab : ""}
            onClick={() => setTab("encerrados")}
          >
            Encerrados
          </button>
        </div>

        <div className={styles.eventsContainer}>
          {eventosExibidos.map((evento) => (
            <div key={evento.id} className={styles.eventCard}>
              <img src={evento.imagem} alt={evento.nome} />
              <h3>{evento.nome}</h3>
              <p>Data: {evento.data}</p>
              {tab === "ativos" && <button>Comprar</button>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventosPage;
