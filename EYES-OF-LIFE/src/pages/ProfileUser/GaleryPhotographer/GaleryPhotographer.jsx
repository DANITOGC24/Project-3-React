import { useState, useEffect } from 'react';
import { getPhotosGaleryPhotographer } from '../../../services/getPhotosGaleryPhotographer';
import { Link, useNavigate } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import './GaleryPhotographer.css'

const GaleryPhotographer = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const result = await getPhotosGaleryPhotographer();
                console.log('Resultado de las fotos:', result);
                setPhotos(result);
               
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);
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
            <h1 className='h1'>Galeria</h1>
            <div className="button-container">
                <button className="button-PhotoGrapher" onClick={handleGaleryClick}>Galeria</button>
                <button className="button-PhotoGrapher" onClick={handleReservaClick}>Reservar</button>
                <button className="button-PhotoGrapher" onClick={handleEventClick}>Eventos</button>
                <Link className="button-Back" to="#" onClick={() => window.history.back()}>Volver</Link>
            </div>
           
            {Array.isArray(photos.message) && photos.message.length > 0 ? (
            photos.message.map((photo) => (
                <Card key={photo.id} sx={{ maxWidth: 500 }}>
                    <CardMedia
                        className="photos"
                        sx={{ height: 0, paddingTop: '90%' }}
                        image={photo.url}
                    />
                </Card>
            ))  
        ) : (
            <p>No hay fotos disponibles.</p>
        )}
        
    </div>
    );
};

export default GaleryPhotographer;
