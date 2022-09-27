import React from 'react';
import Home from './pages/Home';
import Login from './features/login/login';
import Container from './layout/container';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/*
        <Route path="/contact/">
          <Contact />
        </Route>
        */}

          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
