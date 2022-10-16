import React from 'react';
import Styles from './login.module.css';
import { Container, Divider, FormControl, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Logo from '../../_assets/images/ico_tasks_human.png';
import Tasks from '../../components/tasks';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoginInGoogle from '../../features/login/logInGoogle';
import { useState } from 'react';
import { LoginEmailPassword } from '../../api/loginFunctions';

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  const logIn = async () => {
    console.log(userLogin);
    let result = await LoginEmailPassword(userLogin.email, userLogin.password);

    /*
    localStorage.setItem('userData', 'Jederson Andre');
    document.location.reload();
    */
  };

  const handleEmail = (e) => {
    setUserLogin({ ...userLogin, email: e.target.value });
  };

  const handlePassword = (e) => {
    setUserLogin({ ...userLogin, password: e.target.value });
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyItems="center"
        sx={{ marginTop: '15px', marginBottom: '15px' }}
      >
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
              onChange={handleEmail}
            />

            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              size="medium"
              onChange={handlePassword}
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
