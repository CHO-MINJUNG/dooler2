import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContentList from "./pages/content_list/MainContentList";
import MainContentSingle from "./pages/content_detail/MainContentSingle";

import MainLogin from "./pages/authentication/login/MainLogin";
import MainMypage from "./pages/authentication/mypage/MainMypage";
import MainSignUp from "./pages/authentication/signup/MainSignUp";
import MainLogout from "./pages/authentication/logout/MainLogout";
import MainEditor from "./pages/editor/MainEditor";

import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<MainContentList/>} /> 
        <Route path="/dreams/:id" exact={true} element={<MainContentSingle/>} />
        <Route path="/auth/login" exact={true} element={<MainLogin />} />
        <Route path="/mypage" exact={true} element={<MainMypage />} />
        <Route path="/auth/signup" exact={true} element={<MainSignUp />} />
        <Route path="/auth/logout" exact={true} element={<MainLogout />} />
        <Route path="/createDream" exact={true} element={<MainEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
