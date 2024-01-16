
import './ShowPhotographers.css' 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ButtonPhotographer from "../../../components/ButtonPhotographer/ButtonPhotographer"

import { useState, useEffect } from 'react'
import { getAllPhotographer } from '../../../services/photographer'
import SearchAppBar from '../../../components/SearchBar/SearchBar';

const ShowPhotographers = () => {


  const [photographers, setPhotographers] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const photographersData = await getAllPhotographer();
        setPhotographers(photographersData);
        setLoading(false);
      
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className='fotografos'>Fotógrafos</h1>
      <div className='searchBar'>
            <SearchAppBar />
      </div>

    <div className="cardContainer2">
      {Array.isArray(photographers) && photographers.length > 0 ? (
        photographers.map((photographer) => (
          <Card key={photographer.id} sx={{ width: 500, marginTop: 10, marginLeft:5, marginBottom:10 }}>
            <CardContent >
              <CardMedia
                component="img"
                height="500"
                image={photographer.imagen}
                alt=""
              />
              <div>
                <h3>
                  <strong>Fotografo:</strong> {photographer.name_user}
                </h3>
                <h4>
                  <strong>Email:</strong> {photographer.email}
                </h4>
                <ButtonPhotographer photographer={photographer.id} />
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No photographers available.</p>
      )}
    </div>
    </div>
  );
  
}

export default ShowPhotographers