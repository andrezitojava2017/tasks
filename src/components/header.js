import { Avatar, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../_assets/images/icons8-unpin-48.png';

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ marginTop: '15px' }}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Link to="/perfil">
            <Avatar alt="Foto usuario" src={Logo} />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
