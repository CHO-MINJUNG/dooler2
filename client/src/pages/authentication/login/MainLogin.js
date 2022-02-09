import React from "react";
import LoginWindow from "./LoginWindow";
import { Provider } from "react-redux";
import{ applyMiddleware, createStore} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import {authReducer} from './loginSlice'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

const MainLogin = () => {
  return (
    <Provider
      store={createStoreWithMiddleware(authReducer)}
    >
    <LoginWindow />
    </Provider>
  );
}

export default MainLogin;