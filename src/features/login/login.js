import React from 'react';
import Styles from './login.module.css';
import { Container, Divider, FormControl, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Logo from '../../_assets/images/ico_tasks_human.png';
import Tasks from '../../components/tasks';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LoginEmailPassword, LoginGoogle } from '../../api/loginFunctions';
import Allert from '../../components/allert';
import { getInfoUser } from '../../api/cloudFirestore';

const Login = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  const loginWithEmailAndPassword = async () => {
    let result = await LoginEmailPassword(userLogin.email, userLogin.password);
    let dataUser = await getInfoUser(result.uid);
    let checkin = '';
    dataUser.forEach((doc)=>{
      checkin = JSON.stringify(doc.data());
    })
    sessionStorage.setItem('data', checkin);
    document.location.reload()
  };

  const conditionalCheck = (result) => {
    if (Array.isArray(result)) {
      setError(result[0].errorMessage);
      setOpen(true);
    } else {
      sessionStorage.setItem('data', result.uid);
      document.location.reload();
    }
  };

  const loginWithGoogleAccount = async () => {
    let resultLogin = await LoginGoogle();

    conditionalCheck(resultLogin);
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
              <Button variant="contained" onClick={loginWithEmailAndPassword}>
                Logar
              </Button>
            </Stack>
          </Grid>

          <Divider sx={{ marginTop: '15px' }} />
          <Grid item mt={2}>
            <Button variant="contained" onClick={loginWithGoogleAccount}>
              entrar com google
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Allert open={open} setOpen={setOpen} errorMessage={error} />
    </Container>
  );
};

export default Login;
