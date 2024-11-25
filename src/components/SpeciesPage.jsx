import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';

const SpeciesPage = () => {
  const { id } = useParams(); 
  const [species, setSpecies] = useState(null); 


  const getSpecies = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/species/${id}/`);
      setSpecies(response.data);
    } catch (err) {
      console.error("Error fetching species details:", err);
    }
  };

  useEffect(() => {
    getSpecies();
  }, [id]); 

  if (!species) {
    return <h2>No species found.</h2>;
  }

  return (
    <div>
      <h1>{species.name}</h1>  
      <p>Classification: {species.classification}</p> 
      <p>Designation: {species.designation}</p>  
      <p>Average Height: {species.average_height} cm</p> 
      <p>Skin Colors: {species.skin_colors}</p> 
      <p>Hair Colors: {species.hair_colors}</p> 
      <p>Eye Colors: {species.eye_colors}</p>  
      <p>Language: {species.language}</p> 
      <Link to="/species">Return to Species List</Link> 
    </div>
  );
};

export default SpeciesPage;
