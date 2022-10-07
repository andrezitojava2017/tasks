import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import React, { useState } from "react";

const NovaTarefa = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" fullWidth onClick={handleClickOpen}>
        <AddCircleOutlineRoundedIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
            />
            <TextField
              hiddenLabel
              margin="dense"
              id="data"
              type="date"
              variant="standard"
            />
            <TextField
              hiddenLabel
              margin="dense"
              id="Hinicio"
              type="time"
              variant="standard"
            />
            <TextField
              hiddenLabel
              margin="dense"
              id="Hfim"
              type="time"
              variant="standard"
            />
            <TextField
              
              margin="dense"
              id="descricao"
              label="Descrição"
              type="text"
              multiline
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Salvar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NovaTarefa;
