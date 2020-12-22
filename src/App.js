import React from "react";

import { Route } from "react-router-dom";

import "./style.min.css";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Landing from "./components/routes/Landing";

import Luxury from "./components/routes/products/Luxury";
import Deluxe from "./components/routes/products/Deluxe";
import Superior from "./components/routes/products/Superior";

import ProductPage from "./components/routes/products/ProductPage";

import AccountPage from "./components/routes/AccountPage";
import Basket from "./components/routes/Basket";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="route-box">
        <Route exact path="/mi-amor-client" component={Landing} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/product">
          <ProductPage productName="*product-name*" />
        </Route>
        <Route exact path="/luxury" component={Luxury} />
        <Route exact path="/deluxe" component={Deluxe} />
        <Route exact path="/superior" component={Superior} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
