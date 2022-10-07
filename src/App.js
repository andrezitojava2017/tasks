import React from 'react';
import Perfil from './features/perfil/perfil';
import Home from './features/home/Home';
import Login from './features/login/login';
import Cadastre from './features/cadastro/cadastro';
import Tarefas from './features/tarefas/listTarefas';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import NovaTarefa from './features/tarefas/novaTarefa';

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
          <Route path="/tarefas/nova" element={<NovaTarefa />} />
        </Routes>
      </Box>
      </>
  );
}

export default App;
