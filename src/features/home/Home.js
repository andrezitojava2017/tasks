import { Avatar, Container, Grid, Paper, Stack } from "@mui/material";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import Logo from "../../_assets/images/icons8-unpin-48.png";
import Tasks from "../../components/tasks";
import React from "react";
const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={2}
          >
            <Avatar alt="Remy Sharp" src={Logo} />
          </Stack>
        </Grid>
        <Grid item xs>
          <Tasks />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs>
          <Container>
            <Paper elevation={3} sx={{width:'150px', height:'120px', padding: "15px", textAlign: "center" }}>
              <FormatListNumberedOutlinedIcon
                sx={{ fontSize: 65, color: "#00C6CF", textAlign: "center" }}
              />
              <br />
              <span>Adicionar Tarefa</span>
            </Paper>
          </Container>
        </Grid>

        <Grid item xs>
          <Container>
            <Paper elevation={3} sx={{width:'150px', height:'120px', padding: "15px", textAlign: "center" }}>
              <FormatListNumberedOutlinedIcon
                sx={{ fontSize: 65, color: "#00C6CF", textAlign: "center" }}
              />
              <br />
              <span>Minhas Tarefas</span>
            </Paper>
          </Container>
        </Grid>

        <Grid item xs>
          <Container>
            <Paper elevation={3} sx={{ width:'150px', height:'120px', padding: "15px", textAlign: "center" }}>
              <FormatListNumberedOutlinedIcon
                sx={{ fontSize: 65, color: "#00C6CF", textAlign: "center" }}
              />
              <br />
              <span>Relatorios</span>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
