// AppBar.js

import "./AppBarLayoutPhotographer.css";
import logoImage from "../../assets/images/eyes_of_life.png";
import { Link } from "react-router-dom";
import BurguerMenuAppBar from "../BurguerMenuAppBar/BurguerMenuAppBar";

const AppBar = () => {
  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <Link to="/">
          <h1>EYES OF LIFE</h1> 
          <img src={logoImage} alt="Logo" className="app-logo" />
        </Link>
       
        <div className="button-container">
          <Link to="/profile-photographer">
            <button className="app-button">Perfil</button>
          </Link>
          <Link to="/my-messages">
            <button className="app-button">Mis Mensajes</button>
          </Link>
          <Link to="/my-dates">
            <button className="app-button">Mis reservas</button>
          </Link>
          <Link to="/my-galery">
            <button className="app-button">Mi Galeria</button>
          </Link>
          <Link to="/my-events">
            <button className="app-button">Mis Eventos</button>
          </Link>
          <BurguerMenuAppBar />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
