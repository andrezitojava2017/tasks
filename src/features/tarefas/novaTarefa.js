import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  searchTaskById,
  SetNewTask,
  updateTask,
} from "../../api/cloudFirestore";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Allert from "../../components/allert";
import { Link, useParams } from "react-router-dom";

const NovaTarefa = () => {
  // estado que sera utilizado no cmponent Allert
  const [open, setOpen] = useState(false);
  // estado que define o tipo do alert a ser exibido
  const [type, setType] = useState("success");
  // estado que armazena a mensagema a ser exibida no alert
  const [message, setMessage] = useState("Informação tratada com sucesso!");
  // estados para exibir a barra de progresso no botao salvar
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { id } = useParams();

  const [mydt, setMydt] = useState({
    title: "",
    taskDate: "",
    timeInitial: "",
    timEnd: "",
    description: "",
    id: "",
    situation: "",
    uidUser: "",
  });
  useEffect(() => {
    if (id) {
      (async () => {
        let result = await searchTaskById(id);
        let data = "";
        result.forEach((rs) => {
          data = rs.data();
        });
        setMydt({ ...data });
      })();
    }
  }, []);

  const changeTitulo = (e) => {
    let titulo = e.target.value;
    setMydt({ ...mydt, title: titulo });
  };

  const changeDate = (e) => {
    setMydt({ ...mydt, taskDate: e.target.value });
  };

  const changeHoraInicio = (e) => {
    setMydt({ ...mydt, timeInitial: e.target.value });
  };
  const changeHoraFim = (e) => {
    setMydt({ ...mydt, timEnd: e.target.value });
  };

  const changeDescricao = (e) => {
    setMydt({ ...mydt, description: e.target.value });
  };

  const clickCancel = () => {
    setMydt({
      title: "",
      taskDate: "",
      timeInitial: "",
      timEnd: "",
      description: "",
      id: "",
      situation: "",
      uidUser: "",
    });
  };

  const insertNewTask = async () => {
    const uid = JSON.parse(sessionStorage.getItem("data"));

    if (id) {
      if (!loading) {
        // exibi a barra de progresso no button salvar
        setSuccess(false);
        setLoading(true);

        if (await updateTask(mydt, id)) {
          setLoading(false);
          setSuccess(true);
          setOpen(true);
        }
      }
    } else {
      if (!loading) {
        // exibi a barra de progresso no button salvar
        setSuccess(false);
        setLoading(true);

        // chama a api que ira inserir os dados no firestore
        let result = await SetNewTask(
          mydt.title,
          mydt.taskDate,
          mydt.timeInitial,
          mydt.timEnd,
          mydt.description,
          mydt.situation,
          uid.uid
        );

        if (Array.isArray(result)) {
          setOpen(true);
          setType("error");
          setMessage(result[0].errorMessage);
          setLoading(false);
          setSuccess(true);
        } else {
          setLoading(false);
          setSuccess(true);
          setOpen(true);
        }
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
      sx={{ marginTop: "15px", marginBottom: "15px" }}
    >
      <Grid item>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
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
              value={mydt.title}
              onChange={changeTitulo}
              sx={{ padding: "8px" }}
            />
          </Grid>
        </Container>
        <Container>
          <TextField
            id="data"
            hiddenLabel
            variant="outlined"
            type="date"
            value={mydt.taskDate}
            onChange={changeDate}
            sx={{ padding: "8px" }}
          />
          <TextField
            hiddenLabel
            id="horaInicio"
            variant="outlined"
            type="time"
            value={mydt.timeInitial}
            onChange={changeHoraInicio}
            sx={{ padding: "8px" }}
          />
          <TextField
            id="horaFim"
            hiddenLabel
            variant="outlined"
            type="time"
            value={mydt.timEnd}
            onChange={changeHoraFim}
            sx={{ padding: "8px" }}
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
              value={mydt.description}
              onChange={changeDescricao}
              sx={{ padding: "8px" }}
            />
          </Grid>
        </Container>
        <Container>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ m: 1, position: "relative" }}>
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
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
            <Button
              variant="contained"
              sx={{ marginLeft: "10px" }}
              onClick={clickCancel}
            >
              <span>CANCELAR</span>
            </Button>
          </Box>
        </Container>
      </Grid>
      <Allert type={type} open={open} setOpen={setOpen} message={message} />
      <Stack direction={"row"} justifyContent="center" spacing={4}>
        <Box style={{ marginTop: "20px" }}>
          <Link to="/">Principal</Link>
        </Box>
        <Box style={{ marginTop: "20px" }}>
          <Link to="/tarefas">Minhas tarefas</Link>
        </Box>
      </Stack>
    </Grid>
  );
};

export default NovaTarefa;
