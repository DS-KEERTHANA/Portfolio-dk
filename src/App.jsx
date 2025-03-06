import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";
import Project from './Projects'

// import img2 from "../src/assets/keerthana.JPG"

let App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
