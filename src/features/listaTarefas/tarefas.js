import {
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../../components/header";

const Tarefas = () => {
  const [data, setData] = useState('');

  const diaAtual = () => {
    let dia = new Date().getDate();
    setData(dia)
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
            <Typography variant="h4">
              {data}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Tarefas;
