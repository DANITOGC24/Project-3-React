import React from 'react';
import './EventsImages.css';
import { Link } from 'react-router-dom';

const EventsImages = () => {
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

  return (
    <>
   <h1 className='h1'>Packs de Boda</h1>
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

export default EventsImages;
