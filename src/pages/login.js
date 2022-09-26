import React from "react";
import { Grid } from "@mui/material";
const Login = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <span>xs=8</span>
        </Grid>
        <Grid item xs={6}>
          <span>xs=4</span>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
