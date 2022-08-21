import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App