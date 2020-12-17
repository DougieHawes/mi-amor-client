import React from "react";

import { Route } from "react-router-dom";

import "./style.min.css";

import Navbar from "./components/layout/Navbar";

import AccountPage from "./components/routes/AccountPage";
import Landing from "./components/routes/Landing";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/account" component={AccountPage} />
    </div>
  );
};

export default App;
