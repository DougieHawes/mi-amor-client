import "./style.min.css";

import { Input2 } from "../../utils/inputs";

const Register = ({ onClick }) => {
  return (
    <div>
      <h4>Register</h4>
      <form>
        <Input2 type="text" placeholder="enter name..." />
        <Input2 type="text" placeholder="enter email..." />
        <Input2 type="password" placeholder="enter password..." />
        <Input2 type="password" placeholder="confirm password..." />
      </form>
      <p onClick={onClick}>Already registered? Login HERE.</p>
    </div>
  );
};

export default Register;
