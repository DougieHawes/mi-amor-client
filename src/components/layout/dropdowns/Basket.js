import React from "react";

import "./style.min.css";

import { BasketItem1 } from "../../utils/basketItems";

const Basket = ({ mouseleave }) => {
  return (
    <div className="dropdown basket" onMouseLeave={mouseleave}>
      <h3 className="dropdown-title">Your Basket</h3>
      <div className="basket-items">
        <BasketItem1 name='blonde 12"' price="120" qty="2" />
        <BasketItem1 name='dark 16"' price="120" qty="1" />
        <BasketItem1 name='red 18"' price="120" qty="2" />
        <BasketItem1 name='black 12"' price="120" qty="4" />
      </div>
      <div className="basket-total">
        total: <span className="price">£ *?*</span>
      </div>
      <div className="basket-checkout">
        <i className="fas fa-shopping-basket"></i> checkout
      </div>
    </div>
  );
};

export default Basket;
