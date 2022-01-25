import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Main }  from './pages';
import ContentSingle from "./pages/content_detail/ContentSingle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Main/>} /> 
        <Route path="/:no" exact={true} element={<ContentSingle/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
