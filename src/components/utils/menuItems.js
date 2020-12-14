import "./style.min.css";

export const MenuItem1 = ({ category }) => (
  <div className="menu-item menu-item1">
    <p className="menu-item-category">{category}</p>
  </div>
);

export const MenuItem2 = ({ text }) => (
  <div className="menu-item menu-item2">
    <p className="menu-item-text">{text}</p>
  </div>
);
