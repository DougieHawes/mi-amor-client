import { useState } from "react";

import "./style.min.css";

import { MenuItem1, MenuItem2 } from "../../utils/menuItems";

const Menu = () => {
  const [state, setState] = useState({
    showCategory1: false,
    showCategory2: false,
    showCategory3: false,
  });

  const { showCategory1, showCategory2, showCategory3 } = state;

  return (
    <div className="dropdown menu">
      <MenuItem1
        onClick={() => setState({ ...state, showCategory1: !showCategory1 })}
        category="category1"
      />
      {showCategory1 && (
        <>
          <MenuItem2 text="product1" />
          <MenuItem2 text="product2" />
          <MenuItem2 text="product3" />
        </>
      )}
      <MenuItem1
        onClick={() => setState({ ...state, showCategory2: !showCategory2 })}
        category="category2"
      />
      {showCategory2 && (
        <>
          <MenuItem2 text="product1" />
          <MenuItem2 text="product2" />
          <MenuItem2 text="product3" />
          <MenuItem2 text="product4" />
          <MenuItem2 text="product5" />
        </>
      )}

      <MenuItem1
        onClick={() => setState({ ...state, showCategory3: !showCategory3 })}
        category="category3"
      />
      {showCategory3 && (
        <>
          <MenuItem2 text="product1" />
          <MenuItem2 text="product2" />
        </>
      )}
    </div>
  );
};

export default Menu;
