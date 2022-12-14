import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Logo from "../_assets/images/icons8-unpin-48.png";

const Tasks = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Stack direction="row" sx={{ marginBottom: "10px" }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Tasks
        </Typography>
        <img
          src={Logo}
          alt="Tasks Logo"
          style={{ height: "50px", width: "50px" }}
        />
      </Stack>
    </Grid>
  );
};
export default Tasks;
