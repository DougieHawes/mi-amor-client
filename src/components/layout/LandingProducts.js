import "./style.min.css";

import { Card1 } from "../utils/cards";

const LandingProducts = () => {
  return (
    <div className="landing-products">
      <h2 className="landing-products-title">Products</h2>
      <div className="landing-products-grid">
        <Card1 link="/luxury" cardTitle="Luxury" />
        <Card1 link="/deluxe" cardTitle="Deluxe" />
        <Card1 link="/superior" cardTitle="Superior" />
      </div>
    </div>
  );
};

export default LandingProducts;
