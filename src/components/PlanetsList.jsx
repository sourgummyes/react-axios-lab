import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/planets/');
      setPlanets(response.data.results);
      console.log(response);
    } catch (err) {
      console.error("Error getting planets:", err);
    }
  };

  useEffect(() => {
    getPlanets();
  }, []);

  if (!planets.length) {
    return <h2>No planets found...</h2>;
  }

  const getIdFromUrl = (url) => {
    const match = url.match(/\/(\d+)\//);  
    return match ? match[1] : null;  
  }; //thanksGPT.

  return (
    <header>
      <h1>Planets</h1>
       <ul>
        {planets.map((planet) => {
          const planetId = getIdFromUrl(planet.url);
          return (
            <li key={planetId}>
              <Link to={`/planets/${planetId}`}>
                <h2>{planet.name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default PlanetsList;
