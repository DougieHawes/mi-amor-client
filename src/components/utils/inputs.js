import "./style.min.css";

export const Input1 = ({ placeholder }) => (
  <input className="input input1" type="text" placeholder={placeholder} />
);

export const Input2 = ({ type, placeholder }) => (
  <input className="input input2" type={type} placeholder={placeholder} />
);
