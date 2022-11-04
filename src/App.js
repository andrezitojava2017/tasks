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
import NotFound from './features/notFound/NotFound';

function App() {
  const userDat = sessionStorage.getItem('data');

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
            <Route path="/tarefas/update/:id" element={<NovaTarefa />} />
            <Route path="*" element={<NotFound />} />
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
