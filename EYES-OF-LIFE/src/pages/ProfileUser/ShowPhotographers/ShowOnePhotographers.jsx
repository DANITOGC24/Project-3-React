
import { useState, useEffect } from 'react'
import { getOnePhotographer} from '../../../services/photographer'

const ShowOnePhotographer = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (id) => {
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
      }, []);

      const handleEditClick = () => {
        
        alert('Editar fotógrafo');
      };
    
      const handleSaveClick = () => {
        
        alert('Guardar fotógrafo');
      };
    
      const handleDeleteClick = () => {
        
        alert('Eliminar fotógrafo');
      };
    
      const handleBackClick = () => {
       
        alert('Volver');
      };
    
      return (
        <div>
          <button onClick={handleEditClick}>Galeria</button>
          <button onClick={handleSaveClick}>Reservar</button>
          <button onClick={handleDeleteClick}>Event</button>
          <button onClick={handleBackClick}>Volver</button>

          <header>
            <h1>Datos del Fotógrafo</h1>
          </header>

          <div className="container">
            <h2>Información del Fotógrafo</h2>
            <p><strong>Nombre:</strong> </p>
            <p><strong>Email:</strong> </p>
            <p><strong>Teléfono:</strong> </p>
          </div>
          
        </div>
      );
    };

export default ShowOnePhotographer;