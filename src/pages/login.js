import React from "react";
import Styles from "../features/login/login.module.css";
import { Grid } from "@mui/material";
import Logo from "../_assets/images/ico_tasks_human.png";
import Tasks from '../components/tasks'
import Stack from "@mui/material/Stack";
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
        <Grid item xs={12}>
          <Stack direction={"column"} spacing={3}>
            <img alt="Logo tasks" src={Logo} className={Styles.img} />
            <Tasks/>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
