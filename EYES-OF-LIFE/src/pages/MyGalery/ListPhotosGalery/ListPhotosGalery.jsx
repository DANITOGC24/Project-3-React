
import "./ListPhotosGalery.css";
import PhotosGaleryPhotographer from "../PhotosGalery/PhotosGaleryPhotographer";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const ListPhotosGalery = ({ photosGalery }) => {
  return (
    <Box 
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 0.5fr)", 
      gap: "16px", 
  
    }}
  >
      {photosGalery && photosGalery.map((photo) => {
        return (
          
            <Link  key={photo.id} to={`/my-galery/${photo.id}`}>
              <PhotosGaleryPhotographer  galeryPhotos={photo} />
            </Link>
            
        );
      })}
          <div className="space-at-bottom"></div>
    </Box>
  );
};

export default ListPhotosGalery;
