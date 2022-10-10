import { FormControl, Grid, Stack, TextField, Typography } from "@mui/material";
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
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Stack direction="row" sx={{ marginBottom: "10px" }}>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Nova Tarefa
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={8}>
          <TextField
            fullWidth
            id="titulo"
            label="Titulo"
            variant="outlined"
            sx={{ padding: "8px" }}
            size="small"
          />
        </Grid>
        <Grid item xs={8}>
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
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="descricao"
            label="Descricao"
            variant="outlined"
            type="text"
            sx={{ padding: "8px" }}
            multiline
          />
        </Grid>
      </Grid>

      <Grid xs={3}></Grid>
    </Grid>
  );
};

export default NovaTarefa;
