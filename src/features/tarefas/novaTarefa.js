import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const NovaTarefa = () => {
  const [mydt, setMydt] = useState({
    titulo: '',
    data: '',
    inicio: '',
    fim: '',
    descricao: '',
  });

  const changeTitulo = (e) => {
    let titulo = e.target.value;
    setMydt({ ...mydt, titulo: titulo });
  };

  const changeDate = (e) => {
    setMydt({ ...mydt, data: e.target.value });
  };

  const changeHoraInicio = (e) => {
    setMydt({ ...mydt, inicio: e.target.value });
  };
  const changeHoraFim = (e) => {
    setMydt({ ...mydt, fim: e.target.value });
  };

  const changeDescricao = (e) => {
    setMydt({ ...mydt, descricao: e.target.value });
  };
  const handleClik = (e) => {
    console.log(mydt);
  };

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
              value={mydt.titulo}
              onChange={changeTitulo}
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
            value={mydt.data}
            onChange={changeDate}
            sx={{ padding: '8px' }}
          />
          <TextField
            hiddenLabel
            id="horaInicio"
            variant="outlined"
            type="time"
            value={mydt.inicio}
            onChange={changeHoraInicio}
            sx={{ padding: '8px' }}
          />
          <TextField
            id="horaFim"
            hiddenLabel
            variant="outlined"
            type="time"
            value={mydt.fim}
            onChange={changeHoraFim}
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
              value={mydt.descricao}
              onChange={changeDescricao}
              sx={{ padding: '8px' }}
            />
          </Grid>
        </Container>
        <Container>
          <Button
            variant="contained"
            sx={{ marginLeft: '10px' }}
            onClick={handleClik}
          >
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
