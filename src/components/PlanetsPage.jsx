import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';

const PlanetsPage = () => {
  const { id } = useParams();  
  const [planet, setPlanet] = useState(null);  

  const getPlanet = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      setPlanet(response.data);  
    } catch (err) {
      console.error("Error fetching planet details:", err);  
    }
  };

  useEffect(() => {
    getPlanet();
  }, [id]);

  if (!planet) {
    return <h2>No planet found.</h2>;
  }

  return (
    <div>
      <h1>{planet.name}</h1>  
      <p>Climate: {planet.climate}</p>  
      <p>Terrain: {planet.terrain}</p>  
      <p>Population: {planet.population}</p>  
      <p>Diameter: {planet.diameter} km</p>  
      <p>Rotation Period: {planet.rotation_period} hours</p>  
      <p>Orbital Period: {planet.orbital_period} days</p>  
      <Link to="/planets">Return to Planets List</Link>  
    </div>
  );
};

export default PlanetsPage;
