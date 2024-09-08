import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Switch, Link }from "react-router-dom";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About_Me from "./Components/About_Me";
// import imge from './Components/img.jpeg';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/education" element={<Education />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/> 
         <Route path="/about" element={<About_Me/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
