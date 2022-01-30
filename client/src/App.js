import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContentList from "./pages/content_list/MainContentList";
import MainContentSingle from "./pages/content_detail/MainContentSingle";
import axios from "axios";

function App() {
  // const callApi = async () => {
  //   axios.get("/api")
  //   .then(res => console.log(res))   
  // };
  
  // useEffect(() => {
  //   callApi();
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<MainContentList/>} /> 
        <Route path="/:id" exact={true} element={<MainContentSingle/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
