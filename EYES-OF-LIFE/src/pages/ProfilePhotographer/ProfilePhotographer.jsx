import { useState, useEffect } from 'react';
import { getProfilePhotographer, updateProfilePhotographer } from '../../services/profilephotographer';
import './ProfilePhotographer.css';
import A from '../../assets/images/B.Peña-4.jpg';


const ProfilePhotographer = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedAboutMe, setEditedAboutMe] = useState(''); // Cambiado de editedData a editedAboutMe

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getProfilePhotographer();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error('Error al cargar los datos del perfil del fotógrafo:', error);
        setError('Error al cargar los datos del perfil del fotógrafo. Consulta la consola para más detalles.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEditProfile = (section) => {
    setEditMode(!editMode);
    // Puedes inicializar los datos editados aquí según la sección
    setEditedAboutMe(userData.user.infoPhotoGrapher.aboutMe || '');
  };

  const handleSaveProfile = async () => {
    try {
      // Actualiza el estado local con la información editada
      setUserData((prevUserData) => ({
        ...prevUserData,
        user: {
          ...prevUserData.user,
          infoPhotoGrapher: {
            ...prevUserData.user.infoPhotoGrapher,
            aboutMe: editedAboutMe,
          },
        },
      }));

      // Llama a la función para actualizar la información en la base de datos
      await updateProfilePhotographer({ aboutMe: editedAboutMe });
      
      // Finaliza el modo de edición
      setEditMode(false);

      console.log("Datos del usuario actualizados con éxito");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };
  
  

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
        <div className="profile-container">
         
              <img src={A} alt="Mi Perfil" className="profile-image" /> 
              <button onClick={() => handleEditProfile('aboutMe')} className='buttonEdit'>Editar Perfil</button>
               
              <div className="personal-details">
                <h1 className="profile-name">Hola Soy Juana</h1>
                <p className="profile-description">Mi enfoque artístico se centra en la creación de imágenes 
                que no solo sean visualmente impactantes, sino que también transmitan emociones y 
                narrativas profundas. Cada fotografía que capturo es una exploración de la conexión humana, 
                la belleza en lo cotidiano y la expresión de la individualidad.</p> 
              </div>
          </div>
          <div className="right-section">
            <div className="info-box about-me">
              <h2 className="profile-name">Sobre Mí</h2>
                <p className="profile-description">Con 5 años de experiencia en la industria, 
                he trabajado con una variedad de clientes y colaboradores. Mi habilidad para comprender 
                las necesidades y deseos específicos de cada cliente me permite ofrecer resultados personalizados 
                y satisfactorios.</p>
            </div>
          </div>
            <div className="info-box skills">
              <h2 className="profile-name">Habilidades Fotográficas</h2>
                <p className="profile-description">Mis habilidades abarcan una amplia gama de géneros fotográficos,
                 desde retratos emotivos hasta paisajes impresionantes. Mi experiencia incluye trabajos 
                 en eventos, fotografía de estudio, fotografía documental y proyectos comerciales. 
                 Cada especialidad contribuye a mi versatilidad y capacidad para adaptarme a diversas 
                 situaciones.</p>
            </div>
            <div className="contact-info-container">
                  <h2 >Contacto</h2>
                  <div className="contact-info-content">
                    <h3>Número de teléfono:</h3> <p className='contacto'>666777999</p>
                    <h3>Edad:</h3>  <p className='contacto'>25 años</p>
                    <h3>Estudios: </h3> <p className='contacto'>Fotógrafo Profesional</p>
                    <h3>Dirección:</h3> <p className='contacto'>calle sinNombre 5</p>
                    <h3>Años de experiencia profesional:</h3> <p className='contacto'>5 años</p>
                  </div>
                </div>
            <div className="space-at-bottom"></div>
    

         </>
     
      )}
    </>
  );
};

export default ProfilePhotographer;