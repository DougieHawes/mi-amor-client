import "./style.min.css";

export const ProductImage1 = ({ name }) => (
  <div className="product-image product-image1">
    <div className="product-image-container">
      <div className="image"></div>
    </div>
    <p className="product-image-name">{name}</p>
  </div>
);
