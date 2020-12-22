import "./style.min.css";

import { Card2 } from "../../utils/cards.js";

const ProductsPage = ({ title, para1, para2 }) => (
  <div className="route products-page">
    <h2 className="products-page-title">{title}</h2>
    <p className="products-page-para">{para1}</p>
    <div className="products-page-grid">
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
    </div>
    <p className="products-page-para">{para2}</p>
    <div className="products-page-grid">
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
      <Card2 productName="*sample-text*" link="/product" />
    </div>
  </div>
);

export default ProductsPage;
