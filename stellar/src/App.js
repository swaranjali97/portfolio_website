import Home from "./components/Home";
import React from "react";
import Services from "./components/Services";
import Works from "./components/Works";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Works />
    </div>
  );
}

export default App;
