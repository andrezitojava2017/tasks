import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const Perfil = () => {
  let user = JSON.parse(sessionStorage.getItem('data'));

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: '#7FD1AE', marginTop: '20%' }}>
        <Avatar
          alt="Foto perfil"
          src={user.photoURL}
          sx={{ width: '8rem', height: '8rem' }}
        />
        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="h3"
            sx={{ textAlign: 'center', marginTop: '-10px' }}>
            <h3>{user.displayName ? user.displayName : user.name}</h3>
          </Typography>
        </Grid>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center">
          <Avatar alt="E-mail usuario">
            <GoogleIcon />
          </Avatar>
          <Typography variant="p">{user.email}</Typography>
        </Stack>
        <Grid item xs={12}>
          <Stack direction={'row'} justifyContent="center">
            <Box style={{ marginTop: '20px' }}>
              <Link to="/">Principal</Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Perfil;
