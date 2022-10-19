import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
const ItemTarefa = (props) => {
  return (
    <>
      <Grid item>
        <div>
          <ul style={{ listStyle: "none", padding: "12px" }}>
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
              <div>
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={props.removeItemChecked}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </li>
            <li style={{ fontSize: "10px", marginLeft: "15px" }}>
              Situação desta tarefa:{" "}
              <span style={{color:'red'}}>
                {props.tasks.situation === true ? "Concluida" : "Não concluida"}
              </span>
            </li>
          </ul>
        </div>
      </Grid>
    </>
  );
};
export default ItemTarefa;
