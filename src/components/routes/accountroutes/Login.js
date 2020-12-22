import "./style.min.css";

import { Input2 } from "../../utils/inputs";

const Login = ({ onClick }) => {
  return (
    <div>
      <h4>Login</h4>
      <form>
        <Input2 type="text" placeholder="enter email..." />
        <Input2 type="password" placeholder="enter password..." />
      </form>
      <p onClick={onClick}>Not yet registered? Register HERE.</p>
    </div>
  );
};

export default Login;
