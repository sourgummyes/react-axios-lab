import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);

  const getVehicles = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/vehicles/');
      setVehicles(response.data.results);
      console.log(response);
    } catch (err) {
      console.error("Error getting vehicles:", err);
    }
  };

  useEffect(() => {
    getVehicles();
  }, []);

  if (!vehicles.length) {
    return <h2>No vehicles found...</h2>;
  }

  const getVehicleIdFromUrl = (url) => {
    const match = url.match(/\/(\d+)\//);  
    return match ? match[1] : null;  
  };

  return (
    <header>
      <h1>Vehicles</h1>
      <ul>
        {vehicles.map((vehicle, index) => {
          const vehicleId = getVehicleIdFromUrl(vehicle.url); 
          return (
            <li key={vehicleId}>
              
              <Link to={`/vehicles/${vehicleId}`}>
                <h2>{vehicle.name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default VehiclesList;
