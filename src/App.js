import React from "react";

import { Route } from "react-router-dom";

import "./style.min.css";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import AccountPage from "./components/routes/AccountPage";
import Basket from "./components/routes/Basket";
import Landing from "./components/routes/Landing";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="route-box">
        <Route exact path="/" component={Landing} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/account" component={AccountPage} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
