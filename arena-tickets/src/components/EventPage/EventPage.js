import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EventPage.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const EventPage = () => {
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  // Defina os ingressos com o tipo associado
  const tiposDeIngressos = [
    {
      id: 1,
      nome: "Ingresso Pista",
      preco: "R$ 200,00",
      descricao: "Acesso à área comum, perto do palco.",
      tipo: "espectador",
    },
    {
      id: 2,
      nome: "Camarote VIP (Atleta)",
      preco: "R$ 500,00",
      descricao: "Área exclusiva, open bar, vista privilegiada.",
      tipo: "atleta",
    },
  ];

  const eventoInfo = {
    bannerUrl: "https://picsum.photos/1920/1080",
    nome: "Show do Artista X",
    local: "Estádio da Cidade Y",
    dataHora: "20 de Julho de 2025, 20h00",
    descricao:
      "Um show inesquecível do Artista X, com os maiores sucessos e apresentação de convidados especiais.",
    restricoes:
      "Proibida entrada com garrafas, latas e objetos cortantes. Menores de 16 anos somente acompanhados dos pais ou responsáveis.",
    infoAdicional:
      "Estacionamento no local, venda de comidas e bebidas no interior do estádio.",
  };

  const incrementQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prev) => {
      const newQty = (prev[id] || 0) - 1;
      if (newQty < 0) return prev;
      return { ...prev, [id]: newQty };
    });
  };

  const handleBuy = () => {
    const selectedTickets = tiposDeIngressos.filter(
      (ticket) => quantities[ticket.id] > 0
    );

    if (selectedTickets.length === 0) {
      alert("Selecione pelo menos um ingresso para continuar.");
      return;
    }

    // Verifica se algum ingresso é do tipo "atleta"
    const isAthlete = selectedTickets.some(
      (ticket) => ticket.tipo === "atleta"
    );

    // Redireciona para a página correta
    if (isAthlete) {
      navigate("/atleta", { state: { selectedTickets, eventoInfo } });
    } else {
      navigate("/pagamento", { state: { selectedTickets, eventoInfo } });
    }
  };

  const totalIngressos = Object.values(quantities).reduce(
    (acc, val) => acc + (val || 0),
    0
  );

  return (
    <div className={styles.eventPage}>
      <Navbar />
      <div className={styles.headerSection}>
        <div className={styles.bannerContainer}>
          <img
            src={eventoInfo.bannerUrl}
            alt={eventoInfo.nome}
            className={styles.eventBanner}
          />
        </div>
        <div className={styles.ticketBox}>
          <h2>Ingressos</h2>
          <ul>
            {tiposDeIngressos.map((ticket) => (
              <li key={ticket.id}>
                <div className={styles.ticketHeader}>
                  <h3>{ticket.nome}</h3>
                  <p>{ticket.preco}</p>
                </div>
                <small>{ticket.descricao}</small>
                <div className={styles.quantitySelector}>
                  <button onClick={() => decrementQuantity(ticket.id)}>
                    -
                  </button>
                  <span>{quantities[ticket.id] || 0}</span>
                  <button onClick={() => incrementQuantity(ticket.id)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {totalIngressos > 0 && (
            <button className={styles.buyButton} onClick={handleBuy}>
              Comprar ({totalIngressos} ingresso{totalIngressos > 1 ? "s" : ""})
            </button>
          )}
        </div>
      </div>

      <div className={styles.infoSection}>
        <h2>Informações do Evento</h2>
        <div className={styles.infoBlock}>
          <h3>Local e Data</h3>
          <p>{eventoInfo.local}</p>
          <p>{eventoInfo.dataHora}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>Descrição</h3>
          <p>{eventoInfo.descricao}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>Restrições</h3>
          <p>{eventoInfo.restricoes}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>Informações Adicionais</h3>
          <p>{eventoInfo.infoAdicional}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventPage;
