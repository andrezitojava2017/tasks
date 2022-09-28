import { Avatar, Box, Container, Grid, Stack } from "@mui/material";
import Logo from "../../_assets/images/icons8-unpin-48.png";
import Tasks from "../../components/tasks";
import React from "react";
const Home = () => {
  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={2}
          >
            <Avatar alt="Remy Sharp" src={Logo} />
          </Stack>
        </Grid>
        <Grid xs>
          <Tasks />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
