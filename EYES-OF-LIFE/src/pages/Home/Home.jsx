import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/eyes_of_life.png";
import boda1 from "../../assets/images/boda1.webp";
import boda2 from "../../assets/images/boda11.jpg";
import boda3 from "../../assets/images/boda3.webp";
import boda4 from "../../assets/images/boda4.webp";
import boda5 from "../../assets/images/boda5.webp";
import boda6 from "../../assets/images/boda6.webp";



import "./Home.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="welcome-container">
        <h3 className="line-under">Bienvenidos a</h3>
        <h1 className="line-under">EYES OF LIFE</h1>
        <img src={logoImage} alt="Logo de Eyes of Life" className="eyes-of-life-logo" />
      </div>
      <div className="eyes-of-life-container">
        <h2>Captura la perfección </h2>
        <p>Fotografía adaptada a tus necesidades</p>
        <p>Crea tus categorías y eventos personales</p>
        <p>Tus objetivos reflejados</p>
        <p>Descubre cosas increíbles aquí.</p>
        <Link to="/register"> 
        <h3>Comienza ahora</h3>
        </Link>
      </div>
      <div className="galleries-container">
        <h2>Galerías de Impacto</h2>
        
          <div className="column">
            <img src={boda1} alt="Galería de Boda 1" />
            <img src={boda4} alt="Galería de Boda 2" />
            <img src={boda3} alt="Galería de Boda 3" />
            <img src={boda2} alt="Galería de Boda 4" />
            <img src={boda5} alt="Galería de Boda 5" />
            <img src={boda6} alt="Galería de Boda 6" />
          </div>
        
      </div>
    </div>
  );
};

export default HomePage;
