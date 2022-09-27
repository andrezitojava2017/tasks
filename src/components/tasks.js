import React from 'react';
import { Grid } from '@mui/material';

import Styles from './tasks.module.css';

const Tasks = () => {
  return (
    <Grid item className={Styles.h3} >
      <h1>Tasks</h1>
    </Grid>
  );
};
export default Tasks;
