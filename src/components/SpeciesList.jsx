import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SpeciesList = () => {
  const [species, setSpecies] = useState([]);

  const getSpecies = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/species/');
      setSpecies(response.data.results);
      console.log(response);
    } catch (err) {
      console.error("Error getting species:", err);
    }
  };

  useEffect(() => {
    getSpecies();
  }, []);

  if (!species.length) {
    return <h2>No species found...</h2>;
  }

  const getIdFromUrl = (url) => {
    const match = url.match(/\/(\d+)\//);  
    return match ? match[1] : null;  
  }; //thanksGPT.
  return (
    <header>
      <h1>Species</h1>
     <ul>
        {species.map((speciesItem) => {
          const speciesId = getIdFromUrl(speciesItem.url);  
          return (
            <li key={speciesId}>
              <Link to={`/species/${speciesId}`}>
                <h2>{speciesItem.name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default SpeciesList;
