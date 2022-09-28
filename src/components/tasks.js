import React from "react";
import { Stack } from "@mui/material";
import Logo from "../_assets/images/icons8-unpin-48.png";

import Styles from "./tasks.module.css";

const Tasks = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      className={Styles.h3}
    >
      <h1>Tasks</h1>
      <img
        src={Logo}
        alt="Tasks Logo"
        style={{ height: "50px", width: "50px" }}
      />
    </Stack>
  );
};
export default Tasks;
