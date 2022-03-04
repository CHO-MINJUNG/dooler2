import React from "react";
import LoginWindow from "./LoginWindow";
import { Provider } from "react-redux";
import{ createStore} from 'redux';

import {authReducer} from './loginSlice'
import { Container, Divider } from "@mui/material";

const authStore = createStore(authReducer);

const MainLogin = () => {
  return (
    <Container fixed>
      <Divider></Divider>
      <Provider store={authStore}>
        <LoginWindow />
      </Provider>
    </Container>
  );
}

export default MainLogin;