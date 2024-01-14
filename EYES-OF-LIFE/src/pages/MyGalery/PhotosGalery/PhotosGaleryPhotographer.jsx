import "./PhotosGaleryPhotographer.css";
import { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getPhotosGaleryPhotographer } from '../../../services/getPhotosGaleryPhotographer';

export default function PhotosGaleryPhotographer({ galeryPhotos }) {
  useEffect(() => {
    console.log(galeryPhotos)
    const fetchGalery = async () => {
      try {
        // Suponiendo que galeryPhotos es un objeto con title, description y url
        const { title_image, description, url } = galeryPhotos;
        // Puedes establecer los valores directamente en el estado local
        setTitle(title_image);
        setDescription(description);
        setUrl(url);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchGalery();
  }, [galeryPhotos]);  

  // Declara title, description y url como estados locales
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  return (
    <Card sx={{ maxWidth: 500 }} className="card-container">
      <CardMedia
        className="photos"
        sx={{ height: 0, paddingTop: '90%' }}
        image={url}
      />
      <CardContent sx={{ height: 60, width: 500 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Eliminar</Button>
      </CardActions>
    </Card>
  );
};
