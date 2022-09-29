<<<<<<< HEAD
import React from 'react';
import Home from './features/home/Home';
import Login from './features/login/login';
import Cadastre from './features/cadastro/cadastro';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Container, CssBaseline } from '@mui/material';
import Perfil from './features/perfil/perfil';
=======
import React from "react";
import Home from "./features/home/Home";
import Login from "./features/login/login";
import Cadastre from './features/cadastro/cadastro'
import Tarefas from "./features/listaTarefas/tarefas"
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Container, CssBaseline } from "@mui/material";
>>>>>>> 1ceba1c6c401433bf2f6609ef9e13bed27b02366

function App() {
  return (
    <Container>
      <CssBaseline />
      <Box>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastre />} />
<<<<<<< HEAD
          <Route path="/perfil" element={<Perfil />} />
=======
          <Route path="/tarefas" element={<Tarefas />} />
>>>>>>> 1ceba1c6c401433bf2f6609ef9e13bed27b02366
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
