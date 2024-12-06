import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AthleteForm.module.css";

const AthleteForm = () => {
  const [agreedToImageTerms, setAgreedToImageTerms] = useState(false);
  const [agreedToHealthTerms, setAgreedToHealthTerms] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [shirtSize, setShirtSize] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !agreedToImageTerms ||
      !agreedToHealthTerms ||
      !uploadedPhoto ||
      !shirtSize
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    navigate("/pagamento");
  };

  return (
    <div className={styles.athleteForm}>
      <h2>Formulário para Atletas</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label>
            <input
              type="checkbox"
              checked={agreedToImageTerms}
              onChange={() => setAgreedToImageTerms(!agreedToImageTerms)}
            />
            Aceito o termo de uso de imagem
          </label>
        </div>
        <div className={styles.field}>
          <label>
            <input
              type="checkbox"
              checked={agreedToHealthTerms}
              onChange={() => setAgreedToHealthTerms(!agreedToHealthTerms)}
            />
            Aceito o termo de saúde
          </label>
        </div>
        <div className={styles.field}>
          <label>
            Upload de Foto:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setUploadedPhoto(e.target.files[0])}
            />
          </label>
        </div>
        <div className={styles.field}>
          <label>
            Tamanho da Camiseta:
            <select
              value={shirtSize}
              onChange={(e) => setShirtSize(e.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="PP">PP</option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
            </select>
          </label>
        </div>
        <button type="submit">Avançar para Pagamento</button>
      </form>
    </div>
  );
};

export default AthleteForm;
