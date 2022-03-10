import React from "react";
import LoginWindow from "./LoginWindow";

import { Container, Divider } from "@mui/material";


const MainLogin = () => {
  return (
    <Container fixed>
      <Divider></Divider>
        <LoginWindow />
    </Container>
  );
}

export default MainLogin;