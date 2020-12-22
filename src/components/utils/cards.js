import "./style.min.css";

import { Link } from "react-router-dom";

export const Card1 = ({ link, cardTitle }) => (
  <div className="card card1">
    <Link to={link}>
      <div className="card-image"></div>
    </Link>
    <Link to={link}>
      <h3 className="card-title">{cardTitle}</h3>
    </Link>
  </div>
);

export const Card2 = ({ link, productName }) => (
  <div className="card card2">
    <Link to={link}>
      <div className="card-image"></div>
    </Link>
    <Link to={link}>
      <h3 className="card-title">{productName}</h3>
    </Link>
  </div>
);
