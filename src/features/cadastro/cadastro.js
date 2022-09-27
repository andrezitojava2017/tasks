import { Button, Container, FormControl, Grid, TextField } from "@mui/material";

const Cadastro = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <h1>Cadastre-se</h1>
          <FormControl fullWidth>
            <TextField
              id="nameUser"
              label="Digite seu nome"
              variant="outlined"
              sx={{ padding: "8px" }}
            />

            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              type="email"
              sx={{ padding: "8px" }}
            />

            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              sx={{ padding: "8px" }}
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
