// AppBar.js
import React from "react";
import "./AppBarLayoutUser.css";
import logoImage from "../../assets/images/eyes_of_life.png";
import { Link } from "react-router-dom";
import BurguerMenuAppBar from "../BurguerMenuAppBar/BurguerMenuAppBar";

const AppBarUser = () => {
  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <Link to="/">
          <h1>EYES OF LIFE</h1>
          <img src={logoImage} alt="Logo" className="app-logo" />
        </Link>
        
        <div className="button-container">
          { <Link to="/my-messages-user">
            <button className="app-button">Mis Mensajes</button>
          </Link> }
          <Link to="/photographers">
            <button className="app-button">Fotografos</button>
          </Link>
          <Link to="/my-dates-user">
            <button className="app-button">Mis Reservas</button>
          </Link>
          <Link to="/profile-user">
            <button className="app-button">Mi Perfil</button>
          </Link>
         
         
          <BurguerMenuAppBar />
        </div>
      </div>
    </header>
  );
};

export default AppBarUser;
