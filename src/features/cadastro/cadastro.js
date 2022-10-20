import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { createNewUser } from "../../api/cloudFirestore";
import { CreateLoginEmailPassword } from "../../api/loginFunctions";
import Tasks from "../../_assets/images/icons8-unpin-48.png";
import Allert from "../../components/allert";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangedName = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const handleChangePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const handleClikSaveUser = async (e) => {
    let result = await CreateLoginEmailPassword(
      userData.email,
      userData.password
    );

    let data = {
      name: userData.name,
      email: userData.email,
      uidEmail: result.uid,
    };
    let resultUser = await createNewUser(data, "users");

    if (Array.isArray(result) || Array.isArray(resultUser)) {
      setType("error");
      setMessage(result[0].errorMessage);
      setOpen(true);

      if (Array.isArray(resultUser)) {
        setType("error");
        setMessage(resultUser[0].errorMessage);
        setOpen(true);
      }
    } else {
      setType("success");
      setOpen(true);
      setMessage("Novo usuario cadastrado com sucesso!!!");
      sessionStorage.setItem('data', JSON.stringify({'uid':result.uid, 'name':userData.name, 'email':userData.email}));
      document.location.assign("/");
    }
  };
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Grid
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Stack direction="row">
              <Typography variant="h4">Cadastre-se</Typography>
              <img
                src={Tasks}
                alt="Tasks"
                style={{ height: "50px", width: "50px" }}
              />
            </Stack>
          </Grid>

          <FormControl fullWidth>
            <TextField
              id="nameUser"
              label="Digite seu nome"
              variant="outlined"
              sx={{ padding: "8px" }}
              size="small"
              onChange={handleChangedName}
            />

            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              type="email"
              sx={{ padding: "8px" }}
              size="small"
              onChange={handleChangeEmail}
            />

            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              sx={{ padding: "8px" }}
              size="small"
              onChange={handleChangePassword}
            />
          </FormControl>
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginBottom: "5px" }}
              onClick={handleClikSaveUser}
            >
              Cadastrar
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Allert type={type} open={open} setOpen={setOpen} message={message} />
      </Stack>
      <Stack direction={'row'} justifyContent="center">
        <Box style={{marginRight:'20px'}}>
          <Link to="/">Principal</Link>
        </Box>

      </Stack>
    </Container>
  );
};
export default Cadastro;
