import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      setPeople(response.data.results);
      console.log(response);
    } catch (err) {
      console.error("Error getting people:", err);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  if (!people.length) {
    return <h2>No characters found...</h2>;
  }

  return (
    <header>
      <h1>People</h1>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <h2>{person.name}</h2>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default PeopleList;
