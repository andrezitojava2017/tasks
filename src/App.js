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
  const userDat = localStorage.getItem('data');

  return (
    <>
      <CssBaseline />
      <Box>
        {userDat ? (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/tarefas/nova" element={<NovaTarefa />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastre />} />
          </Routes>
        )}
      </Box>
    </>
  );
}

export default App;
