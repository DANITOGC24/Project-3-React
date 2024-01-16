import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import './MyDates.css';



const MyDates = () => {
  const location = useLocation();
  const {name} = location.state || {name: ""};
  console.log(name)
 
  const [formName, setFormName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(name.split(" ")[0]);
  const [selectedPack, setSelectedPack] = useState(name.split(" ")[1])
  const [appointments, setAppointments] = useState([]);
  

 
  const handleSubmit = () => {
    const newAppointment = {
      name: formName,
      date: selectedDate,
      time: selectedTime,
      event: selectedEvent,
      pack: selectedPack,
    };
    console.log(newAppointment);

    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
    updateLocalCalendar([...appointments, newAppointment]);
  
  };

  const handleDelete = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    updateLocalCalendar(updatedAppointments);
  };

  const updateLocalCalendar = (appointments) => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  };


  const resetForm = () => {
    setFormName('');
    setSelectedTime('');
    setSelectedEvent('');
    setSelectedPack('');
  };


  return (
    <div className="my-dates-container">
      <div className="appointment-form">
        <h2>Reservar Cita</h2>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={formName}
            onChange={(e) =>setFormName(e.target.value)}
            required
          />
        </div>
        <div className="form-group-calendar">
          <label htmlFor="date">Fecha:</label>
          <Calendar
          
            onChange={(date) => setSelectedDate(date)}
            value={selectedDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora:</label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'].map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group select-container">
  <label htmlFor="event">Evento: </label>
  <div id="event">
    <span>{selectedEvent}</span>
    <select
      id="event"
      value={selectedEvent}
      onChange={(e) => setSelectedEvent(e.target.value)}
      required
    >
    <option value="Boda">Boda</option>
    <option value="Comunión">Comunión</option>
    <option value="Bautizo">Bautizo</option>
    <option value="Bebé">Bebé</option>
    <option value="Empresa">Empresa</option>
    <option value="Cumpleaños">Cumpleaños</option>
  </select>
  </div>
</div>

<div className="form-group select-container">
  <label htmlFor="pack">Pack:</label>
  <div id="pack">
    <span>{selectedPack}</span>
    <select
      id="pack"
      value={selectedPack}
      onChange={(e) => setSelectedPack(e.target.value)}
      required
    >
    <option value="Estándar">Estándar</option>
    <option value="Premium">Premium</option>
    <option value="Deluxe">Deluxe</option>
  </select>
</div>
</div>
        <button type="button" onClick={handleSubmit}>
          Reservar Cita
        </button>
      </div>

      <div className="divider" />

      <div className="citas-reservadas">
        <h2 style={{ fontSize: '40px', marginBottom: '10px' }}>Citas Reservadas</h2>
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment">
            <div>
            <strong>Fecha:</strong> {new Date(appointment.date).toLocaleDateString()}
            </div>
            <div>
              <strong>Nombre:</strong> {appointment.name}
            </div>
            <div>
              <strong>Hora:</strong> {appointment.time}
            </div>
            <div>
             <strong>event:</strong> {appointment.event}
             </div>
             <div>
             <strong>pack:</strong> {appointment.pack}
             </div>
            <div>
              <button type="button" onClick={() => handleDelete(index)}>
                Eliminar Reserva
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default MyDates;