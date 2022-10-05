import { Container, Grid, Paper } from "@mui/material";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import Header from "../../components/header";
import React from "react";
import Tasks from "../../components/tasks";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container>
      <Header />
      <Tasks />
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Container>
            <Paper
              elevation={3}
              sx={{
                width: "150px",
                height: "120px",
                padding: "15px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <PlaylistAddOutlinedIcon
                sx={{ fontSize: 65, color: "#00C6CF", textAlign: "center" }}
              />
              <br />
              <span>Adicionar Tarefa</span>
            </Paper>
          </Container>
        </Grid>

        <Grid item xs={4}>
          <Container>
            <Link to="/tarefas">
              <Paper
                elevation={3}
                sx={{
                  width: "150px",
                  height: "120px",
                  padding: "15px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <GradingOutlinedIcon
                  sx={{ fontSize: 65, color: "#00C6CF", textAlign: "center" }}
                />
                <br />
                <span>Minhas Tarefas</span>
              </Paper>
            </Link>
          </Container>
        </Grid>

        <Grid item xs={4}>
          <Container>
            <Paper
              elevation={3}
              sx={{
                width: "150px",
                height: "120px",
                padding: "15px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <BarChartOutlinedIcon
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
