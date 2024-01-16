import { useState, useEffect } from 'react';
import './MyGalery.css';
import { getPhotosGaleryPhotographer } from '../../services/getPhotosGaleryPhotographer';
import ListPhotosGalery from './ListPhotosGalery/ListPhotosGalery';

import UploadWidget from '../../components/UploadWidget/UploadWidget';

const MyGalery = () => {
  const [photosGaleryPhotographer, setPhotosGaleryPhotographer] = useState([]);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const[url, setUrl] = useState('')

  const imagenData = {
    title_image: title,
    description: description,
    url: url,
    galeryId: 3
  }

  useEffect(() => {
    const fetchPhotosGaleryPhotographer = async () => {
      try {
        const result = await getPhotosGaleryPhotographer();
       
        setPhotosGaleryPhotographer(result);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchPhotosGaleryPhotographer();
  }, []);
 
  return (
    <> 
    <h2>MyGalery</h2>
      <div className='title'>
        <p>Título</p>
        <label>
          <input type='text' onChange={(e)=> setTitle(e.target.value)} />
        </label>
        <p>Descripción</p>
        <label>
          <input type='text' onChange={(e)=> setDescription(e.target.value)} />
        </label>
      <UploadWidget dataImagen = {imagenData}/> 
      </div>
      <p></p>
     <ListPhotosGalery photosGalery={photosGaleryPhotographer.message} /> 
    </>
  );
};

export default MyGalery;