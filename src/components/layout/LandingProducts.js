import "./style.min.css";

import { ProductImage1 } from "../utils/productImages";

const LandingProducts = () => {
  return (
    <div className="landing-products">
      <h2 className="landing-products-title">Products</h2>
      <div className="landing-products">
        <h2 className="landing-products-grid">
          <ProductImage1 name="*sample text*" />
          <ProductImage1 name="*sample text*" />
          <ProductImage1 name="*sample text*" />
          <ProductImage1 name="*sample text*" />
          <ProductImage1 name="*sample text*" />
          <ProductImage1 name="*sample text*" />
          <ProductImage1 name="*sample text*" />
          <ProductImage1 name="*sample text*" />
          <ProductImage1 name="*sample text*" />
        </h2>
      </div>
    </div>
  );
};

export default LandingProducts;
