import "./style.min.css";

import { Card1 } from "../utils/cards";

const LandingProducts = () => {
  return (
    <div className="landing-products">
      <h2 className="landing-products-title">Products</h2>
      <div className="landing-products-grid">
        <Card1 cardTitle="Luxury" />
        <Card1 cardTitle="Deluxe" />
        <Card1 cardTitle="Superior" />
      </div>
    </div>
  );
};

export default LandingProducts;
