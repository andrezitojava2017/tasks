import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import ItemTarefa from '../../components/itemTarefa';
import LinkHome from '../../components/linkHome';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { arrayListTasks, deleteTask } from '../../api/cloudFirestore';
import DialogNewTask from '../../components/dialogNovaTarefa';
import { blue } from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';

const Tarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState('');
  let newchecked = [];
  const [checked, setChecked] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
    setLoading(true);
    let dados = await arrayListTasks();
    setTimeout(() => {
      setTasks(dados);
      setLoading(false);
    }, 2000);
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
      setChecked(tasks[e.target.id]);
    } else {
      console.log(`elemento desselecionado ${e.target.id}`);
      newchecked = newchecked.filter((item) => item !== e.target.id);
      setChecked([]);
    }
  };

  /**
   * função que remove apenas o item que estiver selecionado
   * @param {event} e
   */
  const removeItemChecked = (e) => {
    if (checked !== -1) {
      deleteTask(checked.title);
      getListTask();
    }
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
          <Stack
            direction="column"
            position="relative"
            justifyContent="center"
            alignItems="center">
            {loading && (
              <Box sx={{ position: 'relative' }}>
                <CircularProgress
                  size={68}
                  sx={{
                    color: blue,
                    position: 'absolute',
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              </Box>
            )}
          </Stack>
          {tasks.map((item, index) => (
            <Paper elevation={2} key={index}>
              <ItemTarefa
                tasks={item}
                setTasks={setTasks}
                change={selectTasks}
                indice={index}
                removeItemChecked={removeItemChecked}
                evento={getListTask}
              />
            </Paper>
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={4}>
          <DialogNewTask
            open={open}
            handleOpen={handleClickOpen}
            setOpen={setOpen}
          />
          <Button variant="contained" fullWidth onClick={handleClickOpen}>
            <AddCircleOutlineRoundedIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: '15px' }}>
        <LinkHome />
      </Grid>
    </Container>
  );
};
export default Tarefas;
