import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        {/*
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact/">
          <Contact />
        </Route>
        */}

        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
