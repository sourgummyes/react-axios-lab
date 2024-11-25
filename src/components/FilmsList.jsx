import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FilmsList = () => {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/films/');
      setFilms(response.data.results);
      console.log(response);
    } catch (err) {
      console.error("Error getting films:", err);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  if (!films.length) {
    return <h2>No films found...</h2>;
  }

  return (
    <header>
      <h1>Films</h1>
      <ul>
        {films.map((film) => {
          const filmId = getIdFromUrl(film.url);  // Get the film ID from the URL
          return (
            <li key={filmId}>
              <Link to={`/films/${filmId}`}>
                <h2>{film.title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default FilmsList;

