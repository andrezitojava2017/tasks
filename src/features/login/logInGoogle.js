import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LoginGoogle } from '../../api/loginFunctions';

const LoginInGoogle = () => {
  const [open, setOpen] = useState(false);
  const [erro, setError] = useState({});

  const loginGoogle = async () => {
    let resultLogin = await LoginGoogle();

    createUserLocal(resultLogin);

    /*console.log(resultLogin);*/

    if (Array.isArray(resultLogin)) {
      setError(resultLogin[0]);
      setOpen(true);
    } else {
      setOpen(false);
      document.location.reload();
    }
  };

  const createUserLocal = (result) => {
    localStorage.setItem('data', JSON.stringify(result.providerData[0]));
  };

  return (
    <Stack>
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {`Ocorreu um erro ${erro.message}`}
        </Alert>
      </Collapse>
      <Button variant="contained" onClick={loginGoogle}>
        entrar com google
      </Button>
    </Stack>
  );
};

export default LoginInGoogle;
