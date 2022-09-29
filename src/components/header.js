import { Avatar, Grid, Stack } from "@mui/material";
import Logo from "../_assets/images/icons8-unpin-48.png";

const Header = () => {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item xs={12} sx={{marginTop:'15px'}}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Avatar alt="Foto usuario" src={Logo} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
