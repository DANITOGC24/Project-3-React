import React, { useState, useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { getProfile } from '../../services/userService';
import './ProfileUser.css';
import { updateUser } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './ProfileUser.css';

// Otros imports...

const ProfileUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const updatedUserData = {
        name_user: user.user.name_user,
        email: user.user.email,
        phone: user.user.phone,
      };

      await updateUser(updatedUserData);
      setEditing(false);
      console.log('Datos del usuario actualizados con éxito');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getProfile();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="user-card" style={{ backgroundColor: ' #f4e3ca' }}>
      {Object.keys(user).length !== 0 && !loading ? (
        <CardContent className="card-content">
          <CardMedia component="img" height="200" image={user.user.imagen} alt="Profile" id="profile-image" />
          <h3 id="name">
            <strong>Name:</strong>{' '}
            {editing ? (
              <input
                type="text"
                value={user.user.name_user}
                onChange={(e) => setUser({ ...user, user: { ...user.user, name_user: e.target.value } })}
              />
            ) : (
              user.user.name_user
            )}
          </h3>
          <h3 id="email">
            <strong>Email:</strong>{' '}
            {editing ? (
              <input
                type="text"
                value={user.user.email}
                onChange={(e) => setUser({ ...user, user: { ...user.user, email: e.target.value } })}
              />
            ) : (
              user.user.email
            )}
          </h3>
          <p id="phone">
            <strong>Phone:</strong>{' '}
            {editing ? (
              <input
                type="text"
                value={user.user.phone}
                onChange={(e) => setUser({ ...user, user: { ...user.user, phone: e.target.value } })}
              />
            ) : (
              user.user.phone
            )}
          </p>
          {editing ? (
            <button onClick={handleSaveClick} id="save-button">
              Guardar
            </button>
          ) : (
            <button onClick={handleEditClick} id="edit-button">
              Editar
            </button>
          )}
        </CardContent>
      ) : (
        <h1>Loading</h1>
      )}
    </Card>
  );
};

export default ProfileUser;
