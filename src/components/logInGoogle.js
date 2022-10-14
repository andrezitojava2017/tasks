import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LoginGoogle from '../api/loginGoogle';

const LoginInGoogle = () => {
  const [open, setOpen] = useState(false);
  const [erro, setError] = useState({});
  const loginGoogle = async () => {
    let resultLogin = await LoginGoogle();
    console.log(resultLogin);
    if (Array.isArray(resultLogin)) {
      setError(resultLogin[0]);
      console.log(resultLogin);
      setOpen(true);
    } else {
      setOpen(false);
    }
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
        Google
      </Button>
    </Stack>
  );
};

export default LoginInGoogle;
