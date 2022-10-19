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
  let newchecked = [];
  const [checked, setChecked] = useState([0]);

  const diaAtual = () => {
    let dia = new Date().getDate();
    setData(dia);
  };

  /**
   * carrega a lista de tarefas ao carregar a pagina
   */
  useEffect(() => {
    getListTask();
  }, []);

  /**
   * recupera a lista de tarefas de um determinado usuario
   */
  const getListTask = async () => {
    let dados = await arrayListTasks();
    setTasks(dados);
  };

  /**
   * função que ira remover todos os items da lista que estivere
   * selecionados
   * @param {event} e
   */
  const selectTasks = (e) => {
    if (e.target.checked) {
      console.log(`elemento selecionado ${e.target.id}`);
      // indices que foram selecionados e podem ser removidos de tasks
      newchecked.push(e.target.id);
    } else {
      console.log(`elemento desselecionado ${e.target.id}`);
      newchecked = newchecked.filter((item) => item != e.target.id);
    }
  };

  /**
   * função que remove apenas o item que estiver selecionado
   * @param {event} e
   */
  const removeItemChecked = (e) => {
    let removed = tasks.splice(e.target.id, 1);
    setChecked(removed);
  };

  /**
   * define o dia atual
   */
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
        <Grid
          xs={4}
          sx={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FormControl fullWidth>
            <TextField id="outlined-search" label="Procurar" type="search" />
            <label>
              <input type="checkbox" value="Selecionar todos" />
              Selecionar todos
            </label>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ padding: '10px' }}>
        <Grid item xs={4}>
          {tasks.map((item, index) => (
            <Paper elevation={2} key={index}>
              <ItemTarefa
                tasks={item}
                change={selectTasks}
                indice={index}
                removeItemChecked={removeItemChecked}
              />
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
