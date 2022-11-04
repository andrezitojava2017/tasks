import { Box, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>Erro 404 - pagina nao encontrada</h2>
      <Stack direction={'row'} justifyContent="center">
        <Box style={{ marginTop: '20px' }}>
          <Link to="/">Principal</Link>
        </Box>
      </Stack>
    </>
  );
};

export default NotFound;
