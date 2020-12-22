import "./style.min.css";

import { Button1 } from "./buttons";

export const BasketItem1 = ({ name, price, qty }) => (
  <div className="basket-item">
    <div className="basket-item-image"></div>
    <p className="basket-item-name">{name}</p>
    <p className="basket-item-price">£{price}</p>
    <p className="basket-item-qty">{qty}</p>
    <Button1 icon="fas fa-times" />
  </div>
);
