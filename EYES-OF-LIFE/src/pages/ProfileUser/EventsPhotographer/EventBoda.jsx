import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EventBoda = () => {
  const eventsData = [
    {
      name: 'Boda estándar',
      prices: {
        price: 500,
        description: 'Cobertura fotográfica completa únicamente de la boda',
        description2: 'Haz click aquí para seleccionar',
      },
    },
    {
      name: 'Boda Premium',
      prices: {
        price: 700,
        description: 'Cobertura de la boda y la celebración combinadas',
        description2: 'Haz click aquí para seleccionar',
      },
    },
    {
      name: 'Boda Deluxe',
      prices: {
        price: 1100,
        description: 'Cobertura completa: Boda más celebración más luna de miel con un precio más reducido',
        description2: 'Haz click aquí para seleccionar',
      },
    },
  ];
  const navigate = useNavigate();

  const handleGaleryClick = (photographer) => {
    navigate(`/photographers/${photographer}/galery`);
  };

  const handleReservaClick = () => {

  };

  const handleEventClick = (photographer) => {
    navigate(`/photographers/${photographer}/event`);
  };

  return (
    <>
    <h1 className='h1'>Packs de Boda</h1>
      <div className="button-container">
        <button className="button-PhotoGrapher" onClick={handleGaleryClick}>Galeria</button>
        <button className="button-PhotoGrapher" onClick={handleReservaClick}>Reservar</button>
        <button className="button-PhotoGrapher" onClick={handleEventClick}>Eventos</button>
        <Link className="button-Back" to="#" onClick={() => window.history.back()}>Volver</Link>
      </div>
   
    <div className="events-container"> 
    
      {eventsData.map((event, index) => (
        <Link to={`/my-dates?event=${event.name}`} state={event} key={index} className="evento">
          <div className="evento-card">
            <h2>{event.name}</h2>
            <ul>
              <li>
                <div>Precio: {event.prices.price}€</div>
                <div>Descripción: {event.prices.description}</div>
              </li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default EventBoda;
