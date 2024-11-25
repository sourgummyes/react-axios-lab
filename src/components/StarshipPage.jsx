import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';

const StarshipPage = () => {
  const { id } = useParams(); 
  const [starship, setStarship] = useState(null);

  const getStarship = async () => {
    try {
        console.log(parseInt(id) + 1)
      const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
      setStarship(response.data);
    } catch (err) {
      console.error("Error fetching starship details:", err);
    }
  };

  useEffect(() => {
    getStarship();
  }, [id]); 

  if (!starship) {
    return <h2>No Starship.</h2>;
  }

  return (
    <div>
      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost: {starship.cost_in_credits} credits</p>
      <p>Length: {starship.length} meters</p>
      <p>Class: {starship.starship_class}</p>
      <Link to="/starships">Return to Starship List</Link>
    </div>
  );
};

export default StarshipPage;