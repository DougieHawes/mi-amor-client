import { useState } from "react";

import { Link } from "react-router-dom";

import "./style.min.css";

import titleImage from "../../media/titleImage.png";

import Menu from "./dropdowns/Menu";
import Searchbar from "./dropdowns/Searchbar";
import Basket from "./dropdowns/Basket";

const Navbar = () => {
  const [state, setState] = useState({
    showMenu: false,
    showSearchbar: false,
    showBasket: false,
  });

  const { showMenu, showSearchbar, showBasket } = state;

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
          className="fas fa-search"
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
            src={titleImage}
            className="title-image"
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
        <i
          className="nav-link-icon fas fa-shopping-basket"
          onClick={() =>
            setState({
              showMenu: false,
              showSearchbar: false,
              showBasket: !showBasket,
            })
          }
        />
      </div>
      {showMenu && <Menu />}
      {showSearchbar && <Searchbar />}
      {showBasket && <Basket />}
    </nav>
  );
};

export default Navbar;
