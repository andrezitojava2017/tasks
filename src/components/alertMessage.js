import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AlertMessage = ({ message, type, openn }) => {
  const [open, setOpen] = useState(openn);
  if (type === 'error') {
    if (open) {
      return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Close me!
            </Alert>
          </Collapse>
        </Stack>
      );
    }
  }
};

export default AlertMessage;
