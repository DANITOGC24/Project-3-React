import { Link, useNavigate } from 'react-router-dom';
import EventImage from '../../../components/EventImage/EventImage';
import Pgboda from '../../../assets/images/Pgboda.jpg';
import Pgcumple from '../../../assets/images/Pgcumple.jpeg';
import Pgbebes from '../../../assets/images/Pgbebes.webp';

const EventPhotographer = () => {
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
    <h1 className='h1'>Eventos</h1>
    <div className="button-container">
        <button className="button-PhotoGrapher" onClick={handleGaleryClick}>Galeria</button>
        <button className="button-PhotoGrapher" onClick={handleReservaClick}>Reservar</button>
        <button className="button-PhotoGrapher" onClick={handleEventClick}>Eventos</button>
        <Link className="button-Back" to="#" onClick={() => window.history.back()}>Volver</Link>
      </div>
    
    <div className="evento-container">
      <Link
        to={{
          pathname: '/my-events/events-boda',
          state: {
            event: 'Boda',
            pack: '',
          },
        }}
        className="evento"
      >
        <EventImage image={Pgboda} title="Bodas" />
      </Link>

      <Link
        to={{
          pathname: '/events-cumpleaños',
          state: {
            event: 'Cumpleaños',
            pack: 'Premium',
          },
        }}
        className="evento"
      >
        <EventImage image={Pgcumple} title="Cumpleaños" />
      </Link>

      <Link
        to={{
          pathname: '/events-bebes',
          state: {
            event: 'Bebés',
            pack: 'BebéPack',
          },
        }}
        className="evento"
      >
        <EventImage image={Pgbebes} title="Bebés" />
      </Link>
    </div>
    </>
  );
};



export default EventPhotographer;
