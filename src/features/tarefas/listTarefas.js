import {
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import ItemTarefa from '../../components/itemTarefa';
import LinkHome from '../../components/linkHome';
import Taref from '../../components/dialogNovaTarefa';
import { arrayListTasks } from '../../api/cloudFirestore';

const Tarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState('');
  const diaAtual = () => {
    let dia = new Date().getDate();
    setData(dia);
  };
  useEffect(() => {
    getListTask();
  }, []);

  const getListTask = async () => {
    let dados = await arrayListTasks();
    setTasks(dados);
  };

  useEffect(() => {
    diaAtual();
  }, [data]);

  return (
    <Container>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            <span>Minhas Tarefas</span>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={6}>
          <Button variant="outlined" onClick={diaAtual}>
            <Typography variant="h4">{data}</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={4} sx={{ marginTop: '20px' }}>
          <FormControl fullWidth>
            <TextField id="outlined-search" label="Procurar" type="search" />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ padding: '10px' }}>
        <Grid item xs={4}>
          {tasks.map((item) => (
            <Paper elevation={2} key={item.id}>
              <ItemTarefa tasks={item} />
            </Paper>
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={4}>
          <Taref />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: '15px' }}>
        <LinkHome />
      </Grid>
    </Container>
  );
};
export default Tarefas;
