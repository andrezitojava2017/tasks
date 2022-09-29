import React from 'react';
import Home from './features/home/Home';
import Login from './features/login/login';
import Cadastre from './features/cadastro/cadastro';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Container, CssBaseline } from '@mui/material';
import Perfil from './features/perfil/perfil';

function App() {
  return (
    <Container>
      <CssBaseline />
      <Box>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastre />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
