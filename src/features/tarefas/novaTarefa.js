import { FormControl, Grid, TextField } from "@mui/material";
import React from "react";

const NovaTarefa = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: "15px", marginBottom: "15px" }}
    >
      <Grid xs={3}></Grid>
      <Grid item xs={6}>
        <Grid item xs={6}>
          
            <TextField
            fullWidth
              id="titulo"
              label="Titulo"
              variant="outlined"
              sx={{ padding: "8px" }}
              size="small"
            />
         
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="data"
            hiddenLabel
            variant="outlined"
            type="date"
            sx={{ padding: "8px" }}
            size="small"
          />
          <TextField
            hiddenLabel
            id="horaInicio"
            variant="outlined"
            type="time"
            sx={{ padding: "8px" }}
            size="small"
          />
          <TextField
            id="horaFim"
            hiddenLabel
            variant="outlined"
            type="time"
            sx={{ padding: "8px" }}
            size="small"
          />
        </Grid>
      </Grid>

      <Grid xs={3}></Grid>
    </Grid>
  );
};

export default NovaTarefa;
