import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';

const VehiclesPage = () => {
  const { id } = useParams();  
  const [vehicle, setVehicle] = useState(null);

  const getVehicle = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/vehicles/${id}/`);
      setVehicle(response.data);
    } catch (err) {
      console.error("Error fetching vehicle details:", err);
    }
  };

  useEffect(() => {
    getVehicle();
  }, [id]); 

  if (!vehicle) {
    return <h2>No Vehicle.</h2>;
  }

  return (
    <div>
      <h1>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Cost: {vehicle.cost_in_credits} credits</p>
      <p>Length: {vehicle.length} meters</p>
      <p>Vehicle Class: {vehicle.vehicle_class}</p>
      <Link to="/vehicles">Return to Vehicle List</Link>
    </div>
  );
};

export default VehiclesPage;
