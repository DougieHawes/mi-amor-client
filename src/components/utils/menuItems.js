import "./style.min.css";

export const MenuItem1 = ({ onClick, category }) => (
  <div className="menu-item menu-item1" onClick={onClick}>
    {category}
  </div>
);

export const MenuItem2 = ({ text }) => (
  <div className="menu-item menu-item2">{text}</div>
);
