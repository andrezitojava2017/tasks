import React from "react";
import { Grid } from "@mui/material";

import Styles from "./tasks.module.css";

const Tasks = () => {
  return (
  <Grid item spacing={2} className={Styles.h3}>
    <h3>Tasks</h3>
  </Grid>
  );
};
export default Tasks;