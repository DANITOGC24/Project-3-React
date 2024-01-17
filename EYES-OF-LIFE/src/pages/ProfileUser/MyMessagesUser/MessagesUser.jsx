import React, { useState } from 'react';

import './CustomMessages.css';
import Chat from '../../MyMessages/Chat'
import carlotaImage from '../../../assets/images/images.jpg';
import irinaImage from '../../../assets/images/mu.png';
import adrianImage from '../../../assets/images/h.png';
import luisImage from '../../../assets/images/ho.png';
import carolImage from '../../../assets/images/hom.jpeg';

const customMessagesData = [
  { emisor: 'Carlota', mensaje: 'Carlota te ha enviado un mensaje', image: carlotaImage },
  { emisor: 'Irina', mensaje: 'Irina te ha enviado un mensaje', image: irinaImage },
  { emisor: 'Adrian', mensaje: 'Adrian te ha enviado un mensaje', image: adrianImage },
  { emisor: 'Luis', mensaje: 'Luis te ha enviado un mensaje', image: luisImage },
  { emisor: 'Carol', mensaje: 'Carol te ha enviado un mensaje', image: carolImage },
];


const CustomMessages = () => {
  const [openChat, setOpenChat] = useState(null);

  const handleChatClick = (index) => {
    setOpenChat(openChat === index ? null : index);
  };

  const handleSendMessage = (sender, message) => {
    console.log(`Mensaje enviado por ${sender}: ${message}`);
  };

  return (
    <div className="CustomMessages-container">
      <h1>Chat Personalizado</h1>
      <ul>
        {customMessagesData.map((message, index) => (
          <li key={index} className="CustomMessages-item">
            <img src={message.image} alt={`Avatar de ${message.emisor}`} />
            <div>
              <h2>{message.emisor}</h2>
              <p>{message.mensaje}</p>
            </div>
            <button className="CustomMessages-button" onClick={() => handleChatClick(index)}>
              Chat
            </button>
            {openChat === index && (
              <Chat emisor={message.emisor} mensaje={[""]} onSendMessage={handleSendMessage} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

 export default CustomMessages;