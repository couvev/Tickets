import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./components/LandPage/LandPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import EventosPage from "./components/EventosPage/EventosPage";
import EventPage from "./components/EventPage/EventPage";
import AthleteForm from "./components/AthleteForm/AthleteForm";
import PaymentPage from "./components/PaymentPage/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/evento" element={<EventPage />} />{" "}
        <Route path="/atleta" element={<AthleteForm />} />
        <Route path="/pagamento" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
