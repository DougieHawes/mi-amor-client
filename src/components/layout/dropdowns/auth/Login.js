import React from "react";

import "../style.min.css";

import { Button1 } from "../../../utils/buttons";
import { Input1 } from "../../../utils/inputs";

const Login = () => (
  <div className="login">
    <Input1 type="text" placeholder="enter email" />
    <Input1 type="password" placeholder="enter password" />
    <Button1 text="login" />
  </div>
);

export default Login;
