import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getOnePhotographer } from '../../../services/photographer';
import './ShowOnePhotoGrapher.css' 
import CardMedia from '@mui/material/CardMedia';



const ShowOnePhotographer = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getOnePhotographer(id);
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
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
    <div>
      <header >
        <h1 className='header1'>Datos del Fotógrafo</h1>
      </header> 
      
      <div className="button-container">
        <button className="button-PhotoGrapher" onClick={handleGaleryClick}>Galeria</button>
        <button className="button-PhotoGrapher" onClick={handleReservaClick}>Reservar</button>
        <button className="button-PhotoGrapher" onClick={handleEventClick}>Eventos</button>
        <Link className="button-Back" to="#" onClick={() => window.history.back()}>Volver</Link>
      </div>

      <CardMedia
                component="img"
                height="300"
                image={user.imagen}
                alt=""
              />
      <div className="container">
        <h2>Información del Fotógrafo</h2>
        <p><strong>Nombre:</strong> {user.name_user}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Teléfono:</strong> {user.phone}</p>
      </div>  

     
    
    </div>
      
  )
};

export default ShowOnePhotographer;
