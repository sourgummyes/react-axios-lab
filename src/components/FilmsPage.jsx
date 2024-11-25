import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const FilmPage = () => {
  const { id } = useParams(); 
  const [film, setFilm] = useState(null);

  const getFilm = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
      setFilm(response.data); 
    } catch (err) {
      console.error("Error fetching film details:", err);
    }
  };

  useEffect(() => {
    getFilm(); }, [id]);

  if (!film) {
    return <h2>Loading film details...</h2>;
  }

  return (
    <div>
      <h1>{film.title}</h1>
      <p><strong>Episode:</strong> {film.episode_id}</p>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Producer:</strong> {film.producer}</p>
      <p><strong>Release Date:</strong> {film.release_date}</p>
      <p><strong>Opening Crawl:</strong> {film.opening_crawl}</p>
      
      <Link to="/films">Return to Films List</Link>
    </div>
  );
};

export default FilmPage;
