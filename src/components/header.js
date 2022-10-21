import { Avatar, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../_assets/images/icons8-unpin-48.png';

const Header = () => {
  let photo = JSON.parse(sessionStorage.getItem('data'))
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} sx={{ marginTop: '15px' }}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Link to="/perfil">
            <Avatar alt="Foto usuario" src={photo.photoURL} />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
