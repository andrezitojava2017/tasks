import React from "react";
import Styles from "./login.module.css";
import { Container, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Logo from "../../_assets/images/ico_tasks_human.png";
import Tasks from "../../components/tasks";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logar from "../../api/loginGoogle";

const Login = () => {
  const handleGoogle = () => {
    Logar();
  };

  return (
    <Container>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={6}>
          <img alt="Logo tasks" src={Logo} className={Styles.img} />
        </Grid>

        <Grid item xs={6}>
          <Tasks />
        </Grid>
      </Grid>

      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Usuario"
            variant="outlined"
            size="medium"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="password"
            label="Senha"
            variant="outlined"
            type="password"
            size="medium"
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} mt={2}>
          <Link to="/cadastro">Cadastre-se</Link>
          <Button variant="contained" sx={{ marginLeft: "15px" }}>
            Logar
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6} mt={2}>
          <Divider />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} mt={2}>
          <Button variant="contained" color="error" onClick={handleGoogle}>
            entrar com Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
