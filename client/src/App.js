import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Main }  from './pages';
import ContentSingle from "./pages/content_detail/ContentSingle";
import axios from "axios";

function App() {
  const callApi = async () => {
    axios.get("/api")
    .then(res => console.log(res))   
  };
  
  useEffect(() => {
    callApi();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Main/>} /> 
        <Route path="/:id" exact={true} element={<ContentSingle/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
