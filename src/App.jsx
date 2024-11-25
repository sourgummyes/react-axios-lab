import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '/src/components/header.jsx';
import Main from '/src/components/main.jsx';

const App = () => {
  return (
    <div>
      <Router>
      <Header/>
      <Main/>
      </Router>
    </div>
  );
}

export default App;
