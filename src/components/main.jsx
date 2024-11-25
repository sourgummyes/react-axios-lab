import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import StarshipList from './StarshipList';
import FilmsList from './FilmsList';
import PlanetsList from './PlanetsList';
import PeopleList from './PeopleList';
import VehiclesList from './VehiclesList';
import SpeciesList from './SpeciesList';
import StarshipPage from './StarshipPage';
import VehiclesPage from './VehiclesPage';
import SpeciesPage from './SpeciesPage';
import PlanetsPage from './PlanetsPage';
import FilmsPage from './FilmsPage';
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList/>} />
        <Route path="/starships/:id" element={<StarshipPage />} />
        <Route path="/films" element={<FilmsList/>} />
        <Route path="/films/:id" element={<FilmsPage />} />
        <Route path="/planets" element={<PlanetsList/>} />
        <Route path="/planets/:id" element={<PlanetsPage />} />
        <Route path="/people" element={<PeopleList/>} />
        <Route path="/vehicles" element={<VehiclesList/>} />
        <Route path="/vehicles/:id" element={<VehiclesPage />} />
        <Route path="/species" element={<SpeciesList/>} />
        <Route path="/species/:id" element={<SpeciesPage />} />
    
      </Routes>
    </>
  );
}

export default Main;