import React from "react";

import "./style.min.css";

import { MenuItem1, MenuItem2 } from "../../utils/menuItems";

const Menu = ({ mouseleave }) => {
  return (
    <div className="dropdown menu" onMouseLeave={mouseleave}>
      <h3 className="dropdown-title">Menu</h3>
      <MenuItem1 category="Extensions" />
      <MenuItem2 text="blonde" />
      <MenuItem2 text="black" />
      <MenuItem2 text="red" />
      <MenuItem2 text="brown" />
      <MenuItem2 text="gray" />
      <MenuItem1 category="Accessories" />
      <MenuItem2 text="clips" />
      <MenuItem2 text="combs" />
      <MenuItem2 text="adheisives" />
    </div>
  );
};

export default Menu;
