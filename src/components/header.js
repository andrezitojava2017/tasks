import { Avatar, Grid, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { useState } from "react";
import {signnOut} from '../api/loginFunctions'

const Header = () => {
  let photo = JSON.parse(sessionStorage.getItem("data"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    (async ()=>{
      await signnOut()
      sessionStorage.removeItem('data');
      window.location.assign('/')
    })();
    setAnchorEl(null);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} sx={{ marginTop: "15px" }}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <IconButton

            onClick={handleClick}
          >
            <Avatar alt="Foto usuario" src={photo.photoURL} /> 
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
