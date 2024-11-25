import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const StarshipList = () => {
    const [starships, setStarships] = useState([]);


    const getStarships = async () => {
        try {
          const response = await axios.get('https://swapi.dev/api/starships/');
          setStarships(response.data.results); 
          console.log(response)
        } catch (err) {
            console.error("Error getting reviews:", error);
        }
      };

      useEffect(() => {
        getStarships();
      }, []);

      if (!starships.length) {
        return <h2>No ships found...</h2>;
      }

      const getIdFromUrl = (url) => {
        const match = url.match(/\/(\d+)\//);  
        return match ? match[1] : null;  
      }; //thanksGPT.

  return (
    <header>
      <h1>Starships</h1>
<ul>
        {starships.map((starship) => {
          const starshipId = getIdFromUrl(starship.url);  // Get ID from URL
          return (
            <li key={starshipId}>
              <Link to={`/starships/${starshipId}`}>
                <h3>{starship.name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default StarshipList;