import React from "react";

import "../style.min.css";

import { Button1 } from "../../../utils/buttons";
import { Input1 } from "../../../utils/inputs";

const Signup = () => (
  <div className="signup">
    <Input1 type="text" placeholder="enter name" />
    <Input1 type="email" placeholder="enter email" />
    <Input1 type="password" placeholder="enter password" />
    <Input1 type="password" placeholder="confirm password" />
    <Button1 text="signup" />
  </div>
);

export default Signup;
