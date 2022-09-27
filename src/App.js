import React from "react";
import Home from "./pages/Home";
import Login from "./features/login/login";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <Container>
      <CssBaseline />
      <Box sx={{ border: "1px solid blue" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
