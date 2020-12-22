import "./style.min.css";

import { Link } from "react-router-dom";

import { BasketItem1 } from "../utils/basketItems.js";
import { Button2 } from "../utils/buttons.js";

const Basket = () => {
  return (
    <div className="route basket">
      <div className="route-container">
        <h2 className="route-container-title">Basket</h2>
        <div className="basket-items-container">
          <div className="basket-items">
            <BasketItem1 name='Blonde Luxury 14"' price="140" qty="2" />
            <BasketItem1 name='Black Luxury 14"' price="140" qty="1" />
            <BasketItem1 name='Red Deluxe 18"' price="210" qty="1" />
            <BasketItem1 name='Black Deluxe 16"' price="190" qty="3" />
            <BasketItem1 name='Blonde Superior 16"' price="280" qty="2" />
          </div>
          <Button2 text="Checkout" />
        </div>
        <Link to="/mi-amor-client">continue shopping</Link>
      </div>
    </div>
  );
};

export default Basket;
