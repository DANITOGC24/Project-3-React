// AppBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImage from "../../assets/images/eyes_of_life.png";

const AppBar = () => {

 

  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <Link to="/">
          <h1>EYES OF LIFE</h1>
        <img src={logoImage} alt="Logo de Eyes of Life" className="app-logo" />
        </Link>
        <div className="button-container">
          <Link to="/register">
            <button className="app-button">Registrate</button>
          </Link>
          <Link to="/sign-in">
            <button className="app-button">Iniciar Sesión</button>
          </Link>
          <Link to="/about-us">
            <button className="app-button">Sobre Nosotros</button>
          </Link>
          <Link to="/">
            <button className="app-button">Inicio</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
