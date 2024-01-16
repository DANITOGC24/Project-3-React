import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './MyDatesUser.css';

const MyDatesUser = () => {
  const { photographerId } = useParams();
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [appointments, setAppointments] = useState({});
  const [userId, setUserId] = useState(''); 
  const [formData, setFormData] = useState({
    name: '',
    selectedDate: new Date(),
    selectedTime: '',
    selectedEvent: 'Boda',
    selectedPack: 'Boda deluxe',
  });

  useEffect(() => {
   
  }, [photographerId]);

  const fetchPhotographerDetails = () => {
   
  };

  useEffect(() => {
    fetchPhotographerDetails();
  }, [photographerId]);

  const handleSearch = () => {
   
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

  const handleDeleteAppointment = (key) => {
    const updatedAppointments = { ...appointments };
    delete updatedAppointments[key];
    setAppointments(updatedAppointments);
    updateLocalCalendar(updatedAppointments, `appointments_${userId}`);
  };

  const updateLocalCalendar = (appointments, userAppointmentsKey) => {
    localStorage.setItem(userAppointmentsKey, JSON.stringify(appointments));
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

      
      <button type="button" className="custom-button" onClick={handleAppointmentSubmission}>
        Reservar Cita
      </button>

      <div className="divider" />

      <div className="citas-reservadas">
        <h2>Citas Reservadas</h2>
        {Object.entries(appointments).map(([key, appointment]) => (
          <div key={key} className="appointment">
            
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