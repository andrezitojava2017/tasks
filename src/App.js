import React from 'react';
import Perfil from './features/perfil/perfil';
import Home from './features/home/Home';
import Login from './features/login/login';
import Cadastre from './features/cadastro/cadastro';
import Tarefas from './features/listaTarefas/tarefas';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastre />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/tarefas" element={<Tarefas />} />
        </Routes>
      </Box>
      </>
  );
}

export default App;
