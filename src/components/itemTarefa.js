import { Grid, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useEffect, useState } from "react";
import DialogNewTask from "./dialogNovaTarefa";


const ItemTarefa = (props) => {
  // estado que sera utilizado no cmponent Allert
  const [open, setOpen] = useState(false);
  // estado que define o tipo do alert a ser exibido
  const [type, setType] = useState("success");
  // estado que armazena a mensagema a ser exibida no alert
  const [message, setMessage] = useState("Informação tratada com sucesso!");
  const [taskSelect, setTaskSelect] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(()=>{
    setTaskSelect(props.tasks)
  },[])

  return (
    <>
      <Grid item>
        <div>
          <ul style={{ listStyle: "none", padding: "12px", marginBottom: "0" }}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <label>
                <input
                  type="checkbox"
                  id={props.indice}
                  value={props.tasks.title}
                  onChange={props.change}
                />

                {`${props.tasks.title}`}
              </label>
            </li>
            <li
              style={{
                fontSize: "10px",
                marginLeft: "15px",
                justifyContent: "space-between",
              }}
            >
              Situação desta tarefa:{" "}
              <span style={{ color: "red" }}>
                {props.tasks.situation === true ? "Concluida" : "Não concluida"}
              </span>
            </li>
          </ul>
          <div style={{ display: "flex", justifyContent: "space-around" }}>

            <Tooltip title="Deletar" placement="bottom-start">
              <IconButton
                edge="end"
                aria-label="delet"
                onClick={props.removeItemChecked}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Alterar" placement="bottom-start">
              <IconButton
                edge="end"
                aria-label="alter"
                onClick={handleClickOpen}
              >
                <BorderColorIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Marcar concluido" placement="bottom-start">
              <IconButton
                edge="end"
                aria-label="confirm"
                onClick={props.removeItemChecked}
              >
                <ThumbUpAltIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <DialogNewTask
              open={open}
              handleOpen={handleClickOpen}
              setOpen={setOpen}
              dataTask={taskSelect}
              setTasks={setTaskSelect}
            />
      </Grid>
    </>
  );
};
export default ItemTarefa;
