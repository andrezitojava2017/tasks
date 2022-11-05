import { Avatar, Grid, IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const photo = JSON.parse(sessionStorage.getItem('data'));

  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: '#7FD1AE', marginBottom: '23px' }}>
      <Grid item xs={12} sm={10} sx={{ marginTop: '12px' }}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start">
          <IconButton>
            <Link to="/perfil">
              <Avatar
                alt="Foto usuario"
                src={photo.photoURL}
                sx={{ width: 56, height: 56 }}
              />
            </Link>
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
