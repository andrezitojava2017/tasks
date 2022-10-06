import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import ItemTarefa from "../../components/itemTarefa";

const Tarefas = () => {
  const [data, setData] = useState("");

  const diaAtual = () => {
    let dia = new Date().getDate();
    setData(dia);
  };

  useEffect(() => {
    diaAtual();
  }, [data]);

  return (
    <Container>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            <span>Minhas Tarefas</span>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Button variant="outlined" onClick={diaAtual}>
            <Typography variant="h4">{data}</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10} sx={{ marginTop: "20px" }}>
          <TextField id="outlined-search" label="Procurar" type="search" />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "10px" }}
      >
        <Grid item xs={10}>
          <Paper elevation="2">
            <ItemTarefa />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper elevation="2" >
            <ItemTarefa />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Tarefas;
