import React from "react";

import "./style.min.css";

import Navbar from "./components/layout/Navbar";
import LandingJumbotron from "./components/layout/LandingJumbotron.js";
import LandingProducts from "./components/layout/LandingProducts.js";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <LandingJumbotron />
      <LandingProducts />
    </div>
  );
};

export default App;
