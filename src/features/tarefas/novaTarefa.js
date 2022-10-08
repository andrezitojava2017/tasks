import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const NovaTarefa = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: '15px', marginBottom: '15px' }}
    >
      <Grid item>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          <span>Nova Tarefa</span>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Container>
          <Grid item>
            <TextField
              fullWidth
              id="titulo"
              label="Titulo"
              variant="outlined"
              type="text"
              sx={{ padding: '8px' }}
            />
          </Grid>
        </Container>
        <Container>
          <TextField
            id="data"
            hiddenLabel
            variant="outlined"
            type="date"
            sx={{ padding: '8px' }}
          />
          <TextField
            hiddenLabel
            id="horaInicio"
            variant="outlined"
            type="time"
            sx={{ padding: '8px' }}
          />
          <TextField
            id="horaFim"
            hiddenLabel
            variant="outlined"
            type="time"
            sx={{ padding: '8px' }}
          />
        </Container>
        <Container>
          <Grid item>
            <TextField
              fullWidth
              multiline
              id="descricao"
              label="Descrição"
              variant="outlined"
              type="text"
              sx={{ padding: '8px' }}
            />
          </Grid>
        </Container>
        <Container>
          <Button variant="contained" sx={{ marginLeft: '10px' }}>
            <span>SALVAR</span>
          </Button>
          <Button variant="contained" sx={{ marginLeft: '10px' }}>
            <span>CANCELAR</span>
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
};

export default NovaTarefa;
