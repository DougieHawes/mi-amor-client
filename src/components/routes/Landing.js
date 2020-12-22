import "./style.min.css";

import LandingJumbotron from "../layout/LandingJumbotron";
import LandingProducts from "../layout/LandingProducts";

const Landing = () => {
  return (
    <div className="route landing">
      <LandingJumbotron />
      <LandingProducts />
    </div>
  );
};

export default Landing;
