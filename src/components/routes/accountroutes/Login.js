import "./style.min.css";

import { Button2 } from "../../utils/buttons";
import { Input2 } from "../../utils/inputs";

const Login = ({ onClick }) => {
  return (
    <div className="login">
      <h4>Login</h4>
      <form className="auth-form login-form">
        <Input2 type="text" placeholder="enter email..." />
        <Input2 type="password" placeholder="enter password..." />
        <Button2 text="login" />
      </form>
      <p className="toggle" onClick={onClick}>
        Not yet registered? Register HERE.
      </p>
    </div>
  );
};

export default Login;
