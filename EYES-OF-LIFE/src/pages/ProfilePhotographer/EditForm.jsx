import React, { useState } from 'react';

const EditForm = ({ data, onSave }) => {
  const [editedData, setEditedData] = useState(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedData);
    
  };

  return (
    <div>
      
      <textarea
        name="aboutMe"
        value={editedData.aboutMe || ''}
        onChange={handleInputChange}
        placeholder="Ingrese información sobre usted..."
      />
      
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default EditForm;