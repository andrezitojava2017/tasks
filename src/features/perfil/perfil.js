import { Avatar, Container, Grid, Stack, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Image from '../../_assets/images/icons8-unpin-48.png';

const Perfil = () => {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ border: '1px solid red' }}
      >
        <Avatar
          alt="Foto perfil"
          src={Image}
          sx={{ width: '8rem', height: '8rem' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          component="h3"
          sx={{ textAlign: 'center', marginTop: '-10px' }}
        >
          <h3>Jedeson Andre</h3>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="E-mail usuario">
            <GoogleIcon />
          </Avatar>
          <Typography variant="body1">andre_sjx@live.com</Typography>
        </Stack>
      </Grid>
    </Container>
  );
};

export default Perfil;
