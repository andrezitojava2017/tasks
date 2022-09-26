import React from 'react';
import Home from './pages/Home';
import Login from './pages/login'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/login" element={<Login />}/>
{/*
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
