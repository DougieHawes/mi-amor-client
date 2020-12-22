import "./style.min.css";

const ProductPage = ({ productName }) => (
  <div className="route product-page">
    <h2 className="product-page-title">{productName}</h2>
  </div>
);

export default ProductPage;
