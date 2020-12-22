import "./style.min.css";

export const Button1 = ({ icon }) => (
  <button className="button button1">
    <i className={icon} />
  </button>
);

export const Button2 = ({ text }) => (
  <button className="button button2">{text}</button>
);
