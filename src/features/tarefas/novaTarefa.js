import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { SetNewTask } from '../../api/cloudFirestore';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Allert from '../../components/allert';

const NovaTarefa = () => {
  // estado que sera utilizado no cmponent Allert
  const [open, setOpen] = useState(false);
  // estado que define o tipo do alert a ser exibido
  const [type, setType] = useState('success');
  // estado que armazena a mensagema a ser exibida no alert
  const [message, setMessage] = useState('Informação tratada com sucesso!');
  // estados para exibir a barra de progresso no botao salvar
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const clickCancel = () => {
    setMydt({ titulo: '', data: '', inicio: '', fim: '', descricao: '' });
  };

  const insertNewTask = async () => {
    if (!loading) {
      // exibi a barra de progresso no button salvar
      setSuccess(false);
      setLoading(true);

      // chama a api que ira inserir os dados no firestore
      let result = await SetNewTask(
        mydt.titulo,
        mydt.data,
        mydt.inicio,
        mydt.fim,
        mydt.descricao
      );

      if (Array.isArray(result)) {
        setOpen(true);
        setType('error');
        setMessage(result[0].errorMessage);
        setLoading(false);
        setSuccess(true);
      } else {
        setLoading(false);
        setSuccess(true);
        setOpen(true);
      }
    }
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button
                variant="contained"
                disabled={loading}
                onClick={insertNewTask}
              >
                Salvar
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
            <Button
              variant="contained"
              sx={{ marginLeft: '10px' }}
              onClick={clickCancel}
            >
              <span>CANCELAR</span>
            </Button>
          </Box>
        </Container>
      </Grid>
      <Allert type={type} open={open} setOpen={setOpen} message={message} />
    </Grid>
  );
};

export default NovaTarefa;
