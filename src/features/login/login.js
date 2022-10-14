import React from 'react';
import Styles from './login.module.css';
<<<<<<< HEAD
import { Box, Collapse, Container, Divider } from '@mui/material';
=======
import { Container, Divider, FormControl, Stack } from '@mui/material';
>>>>>>> 97c1716530bad3c62b7e15433ea08bf038204863
import Grid from '@mui/material/Grid';
import Logo from '../../_assets/images/ico_tasks_human.png';
import Tasks from '../../components/tasks';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoginInGoogle from '../../features/login/logInGoogle';

const Login = () => {
  const logIn = () => {
    localStorage.setItem('userData', 'Jederson Andre');
    document.location.reload();
  };

  return (
    <Container>
<<<<<<< HEAD
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
        </Grid>
        <Grid item xs={12} mt={2}>
          <Button variant="contained" onClick={handleGoogle}>
            Google
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6} mt={2}>
          <Divider />
        </Grid>
      </Grid>

=======
>>>>>>> 97c1716530bad3c62b7e15433ea08bf038204863
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyItems="center"
        sx={{ marginTop: '15px', marginBottom: '15px' }}
      >
<<<<<<< HEAD
        <Grid item xs={12} mt={2}>
          <Button variant="contained" color="error" onClick={handleGoogle}>
            entrar com Google
          </Button>
=======
        <Stack>
          <img alt="Logo tasks" src={Logo} className={Styles.img} />
        </Stack>

        <Stack>
          <Tasks />
        </Stack>

        <Grid item>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Usuario"
              variant="outlined"
              size="medium"
            />

            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              size="medium"
            />
          </FormControl>

          <Grid container justifyContent="space-between">
            <Stack sx={{ paddingTop: '10px' }}>
              <Link to="/cadastro">Cadastre-se</Link>
            </Stack>
            <Stack sx={{ paddingTop: '10px' }}>
              <Button variant="contained" onClick={logIn}>
                Logar
              </Button>
            </Stack>
          </Grid>

          <Divider sx={{ marginTop: '15px' }} />
          <Grid item mt={2}>
            <LoginInGoogle />
          </Grid>
>>>>>>> 97c1716530bad3c62b7e15433ea08bf038204863
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
