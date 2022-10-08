import {
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import ItemTarefa from "../../components/itemTarefa";
import LinkHome from "../../components/linkHome";
import Taref from "../../components/dialogNovaTarefa";

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
      <Grid container justifyContent="center">
        <Grid item xs={4} sx={{ marginTop: "20px" }}>
          <FormControl fullWidth>
            <TextField id="outlined-search" label="Procurar" type="search" />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ padding: "10px" }}>
        <Grid item xs={4}>
          <Paper elevation={2}>
            <ItemTarefa />
          </Paper>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={4}>
          <Taref />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: "15px" }}>
        <LinkHome />
      </Grid>
    </Container>
  );
};
export default Tarefas;
