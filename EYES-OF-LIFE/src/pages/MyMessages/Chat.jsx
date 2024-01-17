import React, { useState } from 'react';

const Chat = ({ emisor, mensajes, onSendMessage }) => {
  const [mensaje, setMensaje] = useState('');
  const [chatMensajes, setChatMensajes] = useState(mensajes || []);

  const handleSendMessage = () => {
    if (mensaje.trim() !== '') {

      const nuevoMensaje = {
        emisor: 'Tú',
        texto: mensaje,
      };
      onSendMessage(emisor, mensaje);
      setChatMensajes([...chatMensajes, nuevoMensaje]);
      
    }
  };
  console.log(chatMensajes)
  return (
    <div className="Chat-container">
      <div className="Chat-header">
        <h2>{emisor}</h2>
      </div>
      <div className="Chat-messages">
        {chatMensajes && chatMensajes.map((mensaje, index) => (
          <div key={index} className={mensaje.emisor === 'Tú' ? 'Chat-message mine' : 'Chat-message'}>
            <strong>{mensaje.emisor}</strong>: {mensaje.texto}
          </div>
        ))}
      </div>
      <div className="Chat-input-area">
        <textarea
          placeholder={`Escribe tu mensaje para ${emisor}`}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;