import React from "react";
import Home from "./pages/Home";
import Login from "./features/login/login";
import Container from "./layout/container";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Box sx={{border:'1px solid blue'}}>
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
   
    </Box>
  );
}

export default App;
