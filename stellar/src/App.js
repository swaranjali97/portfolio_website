import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Services from "./components/Services";
import Works from "./components/Works";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar2 from "./components/Navbar2";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Navbar2 />}></Route>
          <Route path="/" element={<About />}></Route>
          <Route path="/" element={<Services />}></Route>
          <Route path="/" element={<Works />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Home />
      <Navbar2 />
      <About />
      <Services />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
