import "./style.min.css";

import { Button2 } from "../../utils/buttons";
import { Input2 } from "../../utils/inputs";

const Register = ({ onClick }) => {
  return (
    <div className="register">
      <h4>Register</h4>
      <form className="auth-form register-form">
        <Input2 type="text" placeholder="enter name..." />
        <Input2 type="text" placeholder="enter email..." />
        <Input2 type="password" placeholder="enter password..." />
        <Input2 type="password" placeholder="confirm password..." />
        <Button2 text="register" />
      </form>
      <p className="toggle" onClick={onClick}>
        Already registered? Login HERE.
      </p>
    </div>
  );
};

export default Register;
