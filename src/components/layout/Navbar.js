import React, { useState } from "react";

import "./style.min.css";

import Auth from "./dropdowns/auth";
import Basket from "./dropdowns/Basket";
import Menu from "./dropdowns/Menu";

const Navbar = () => {
  const [state, setState] = useState({
    auth: false,
    basket: false,
    menu: false,
  });

  const showLogin = () => setState({ auth: true, basket: false, menu: false });
  const showBasket = () => setState({ auth: false, basket: true, menu: false });
  const showMenu = () => setState({ auth: false, basket: false, menu: true });

  const closeDropdown = () =>
    setState({ auth: false, basket: false, menu: false });

  return (
    <nav className="navbar">
      <h1 className="title">Mi Amor</h1>
      <div className="nav-links">
        <div className="nav-link" onClick={showLogin}>
          <i className="nav-link-icon fas fa-user"></i>
          <p className="nav-link-text">LOGIN</p>
        </div>
        <div className="nav-link" onClick={showBasket}>
          <i className="nav-link-icon fas fa-shopping-basket"></i>
          <p className="nav-link-text">BASKET</p>
        </div>
        <div className="menu-link" onClick={showMenu}>
          <div className="bar-one"></div>
          <div className="bar-two"></div>
          <div className="bar-three"></div>
        </div>
      </div>
      {state.auth && <Auth clickClose={closeDropdown} />}
      {state.basket && <Basket mouseleave={closeDropdown} />}
      {state.menu && <Menu mouseleave={closeDropdown} />}
    </nav>
  );
};

export default Navbar;
