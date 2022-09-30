import React from "react";
import Home from "./features/home/Home";
import Login from "./features/login/login";
import Cadastre from "./features/cadastro/cadastro";
import Tarefas from "./features/listaTarefas/tarefas";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Container, CssBaseline } from "@mui/material";
import Styles from "./App.module.css";
import { ClassNames } from "@emotion/react";
function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastre />} />
          <Route path="/tarefas" element={<Tarefas />} />
        </Routes>
      </Box>
      </>
  );
}

export default App;
