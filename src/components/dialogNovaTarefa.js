import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { SetNewTask } from "../api/cloudFirestore";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Allert from "./allert";

const DialogNewTask = (props) => {
  // estado que sera utilizado no cmponent Allert
  const [open, setOpen] = useState(false);
  // estado que define o tipo do alert a ser exibido
  const [type, setType] = useState("success");
  // estado que armazena a mensagema a ser exibida no alert
  const [message, setMessage] = useState("Informação tratada com sucesso!");
  // estados para exibir a barra de progresso no botao salvar
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [mydt, setMydt] = useState();


  const handleClose = () => {
    props.setOpen(false);
  };
  const changeTitulo = (e) => {
    let titulo = e.target.value;
    props.setTasks({ ...props.dataTask, title: titulo });
    //props.setTasks(titulo);
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
    setMydt({
      titulo: "",
      data: "",
      inicio: "",
      fim: "",
      descricao: "",
      uid: "",
      situacao: false,
    });
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
        mydt.descricao,
        mydt.situacao,
        sessionStorage.getItem("data")
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
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Nova Tarefa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha todos os campos para salvar as tarefas!
          </DialogContentText>
          <Stack>
            <TextField
              autoFocus
              margin="dense"
              id="titulo"
              label="Titulo da tarefa"
              type="text"
              variant="standard"
              onChange={changeTitulo}
              value={(props.dataTask != null ? props.dataTask.title : '')}
              /*value={mydt.titulo}*/
            />
            <TextField
              hiddenLabel
              margin="dense"
              id="data"
              type="date"
              variant="standard"
              onChange={changeDate}
              value={(props.dataTask != null ? props.dataTask.taskDate : '')}
            />
            <TextField
              hiddenLabel
              margin="dense"
              id="Hinicio"
              type="time"
              variant="standard"
              onChange={changeHoraInicio}
              value={(props.dataTask != null ? props.dataTask.timeInitial : '')}
            />
            <TextField
              hiddenLabel
              margin="dense"
              id="Hfim"
              type="time"
              variant="standard"
              onChange={changeHoraFim}
              value={(props.dataTask != null ? props.dataTask.timEnd : '')}
            />
            <TextField
              margin="dense"
              id="descricao"
              label="Descrição"
              type="text"
              onChange={changeDescricao}
              value={(props.dataTask != null ? props.dataTask.description : '')}
              multiline
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ m: 1, position: "relative" }}>
              <Button disabled={loading} onClick={insertNewTask}>
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
          </Box>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
        <Allert type={type} open={open} setOpen={setOpen} message={message}/>
      </Dialog>
    </div>
  );
};

export default DialogNewTask;
