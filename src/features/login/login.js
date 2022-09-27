import React from "react";
import Styles from "./login.module.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Logo from "../../_assets/images/ico_tasks_human.png";
import Tasks from "../../components/tasks";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
      >
        <Grid item xs="6">
          <img alt="Logo tasks" src={Logo} className={Styles.img} />
        </Grid>
        
        <Grid item xs="6">
          <Tasks />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
      >
        <Grid item xs="12">
          <TextField
            id="outlined-basic"
            label="Usuario"
            variant="outlined"
            size="medium"
          />
        </Grid>
        <Grid item xs="12">
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
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs="12" mt={2}>
          <Button variant="contained">Logar</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
