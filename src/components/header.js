import { Avatar, Grid, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { useState } from "react";
import { signnOut } from "../api/loginFunctions";

const Header = () => {
  let photo = JSON.parse(sessionStorage.getItem("data"));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} sx={{ marginTop: "15px" }}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <IconButton>
            <Avatar
              alt="Foto usuario"
              src={photo.photoURL}
              sx={{ width: 56, height: 56 }}
            />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
