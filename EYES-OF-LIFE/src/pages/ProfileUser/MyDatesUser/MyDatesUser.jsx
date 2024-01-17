import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MyDatesUser.css';

const MyDatesUser = () => {
  const { photographerId } = useParams();
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [appointments, setAppointments] = useState({});
  const [userId, setUserId] = useState(''); // Asegúrate de inicializar userId según tu lógica de autenticación
  const [formData, setFormData] = useState({
    name: '',
    selectedDate: new Date(),
    selectedTime: '',
    selectedEvent: 'Boda',
    selectedPack: 'Boda deluxe',
  });

  useEffect(() => {
    // Lógica para obtener y establecer la información del fotógrafo seleccionado
    // Puedes utilizar la información de la URL (params) o realizar una llamada a la API
    // para obtener los detalles del fotógrafo según el photographerId.
    // setSelectedPhotographer(...);
  }, [photographerId]);

  const fetchPhotographerDetails = () => {
    // Lógica para obtener detalles del fotógrafo (puedes usar fetch o axios)
    // y actualizar setSelectedPhotographer con la información.
    // Ejemplo ficticio:
    // fetch(`/api/photographers/${photographerId}`)
    //   .then(response => response.json())
    //   .then(data => setSelectedPhotographer(data));
  };

  useEffect(() => {
    fetchPhotographerDetails();
  }, [photographerId]);

  const handleSearch = () => {
    // Lógica de búsqueda, puedes realizar una llamada a la API aquí
    // con la consulta de búsqueda (searchQuery) y actualizar setSearchResults
    // Ejemplo: setSearchResults([...]); // Actualiza con los resultados de búsqueda
  };

  const handleAppointmentSubmission = () => {
    const userAppointmentsKey = `appointments_${userId}`;
    const newAppointmentKey = `${formData.selectedDate.toISOString()}-${formData.selectedTime}`;
    const newAppointment = {
      name: formData.name,
      date: formData.selectedDate,
      time: formData.selectedTime,
      event: formData.selectedEvent,
      pack: formData.selectedPack,
    };

    setAppointments((prevAppointments) => ({
      ...prevAppointments,
      [newAppointmentKey]: newAppointment,
    }));

    updateLocalCalendar({ ...appointments, [newAppointmentKey]: newAppointment }, userAppointmentsKey);

    setFormData({
      name: '',
      selectedDate: new Date(),
      selectedTime: '',
      selectedEvent: 'Boda',
      selectedPack: 'Boda deluxe',
    });
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setData((prevData) => [...prevData, { id: prevData.length + 1, ...generateRandomData() }]);
  };

  return (
    <div className="my-dates-container">
      <h2>Reservar Cita con {selectedPhotographer && selectedPhotographer.name}</h2>

      <div className="form-group">
        <label htmlFor="searchQuery">Buscar Fotógrafo por Nombre:</label>
        <input
          type="text"
          id="searchQuery"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {/* Resto del formulario */}
      <button type="button" className="custom-button" onClick={handleAppointmentSubmission}>
        Reservar Cita
      </button>

      <div className="divider" />

      <div className="citas-reservadas">
        <h2>Citas Reservadas</h2>
        {Object.entries(appointments).map(([key, appointment]) => (
          <div key={key} className="appointment">
            {/* Mostrar detalles de la cita */}
            <button type="button" onClick={() => handleDeleteAppointment(key)}>
              Eliminar Reserva
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDatesUser;