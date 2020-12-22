import { useState } from "react";

import { Link } from "react-router-dom";

import "./style.min.css";

import logo from "../../media/logo.jpg";

import Menu from "./dropdowns/Menu";
import Searchbar from "./dropdowns/Searchbar";

const Navbar = () => {
  const [state, setState] = useState({
    showMenu: false,
    showSearchbar: false,
  });

  const { showMenu, showSearchbar } = state;

  return (
    <nav className="navbar">
      <div className="nav-link">
        <i
          className="nav-link-icon fas fa-bars"
          onClick={() =>
            setState({
              showMenu: !showMenu,
              showSearchbar: false,
              showBasket: false,
            })
          }
        />
      </div>
      <div className="nav-link">
        <i
          className="nav-link-icon fas fa-search"
          onClick={() =>
            setState({
              showMenu: false,
              showSearchbar: !showSearchbar,
              showBasket: false,
            })
          }
        />
      </div>
      <div>
        <Link to="/">
          <img
            className="title-image"
            src={logo}
            onClick={() =>
              setState({
                showMenu: false,
                showSearchbar: false,
                showBasket: false,
              })
            }
            alt="Mi Amor Luxury Lengths"
          />
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/account">
          <i
            className="nav-link-icon fas fa-user"
            onClick={() =>
              setState({
                showMenu: false,
                showSearchbar: false,
                showBasket: false,
              })
            }
          />
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/basket">
          <i
            className="nav-link-icon fas fa-shopping-basket"
            onClick={() =>
              setState({
                showMenu: false,
                showSearchbar: false,
                showBasket: false,
              })
            }
          />
        </Link>
      </div>
      {showMenu && <Menu />}
      {showSearchbar && <Searchbar />}
    </nav>
  );
};

export default Navbar;
