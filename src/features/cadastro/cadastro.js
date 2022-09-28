import {
  Button,
  Container,
  FormControl,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import Tasks from "../../_assets/images/icons8-unpin-48.png";

const Cadastro = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Grid item>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <h3>Cadastre-se</h3>
              <img
                src={Tasks}
                alt="Tasks"
                style={{ height: "50px", width: "50px" }}
              />
            </Stack>
          </Grid>

          <FormControl fullWidth>
            <TextField
              id="nameUser"
              label="Digite seu nome"
              variant="outlined"
              sx={{ padding: "8px"}}
              size='small'
            />

            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              type="email"
              sx={{ padding: "8px" }}
              size='small'
            />

            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              sx={{ padding: "8px" }}
              size='small'
            />
          </FormControl>
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginBottom: "5px" }}
            >
              Cadastrar
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
};
export default Cadastro;
