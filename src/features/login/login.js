import React from 'react';
import Styles from './login.module.css';
import { FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import Logo from '../../_assets/images/ico_tasks_human.png';
import Tasks from '../../components/tasks';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <img alt="Logo tasks" src={Logo} className={Styles.img} />
        <Tasks />
      </Grid>
      <Grid item>
        <FormControl variant="outlined">
          <TextField
            id="outlined-basic"
            label="Usuario"
            variant="outlined"
            size="medium"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl variant="outlined">
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            type="password"
            size="medium"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <Button variant="contained">Logar</Button>
      </Grid>
    </Grid>
  );
};

export default Login;
