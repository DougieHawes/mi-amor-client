import { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";

const Auth = ({ clickClose }) => {
  const [registeredUser, toggleRegisteredUser] = useState(true);

  return (
    <div className="dropdown auth">
      {registeredUser ? <Login /> : <Signup />}
      <div className="auth-footer">
        <div className="auth-footer-item1" onClick={clickClose}>
          close
        </div>
        {!registeredUser ? (
          <div
            className="auth-footer-item2"
            onClick={() => toggleRegisteredUser(true)}
          >
            already registered?
          </div>
        ) : (
          <div
            className="auth-footer-item2"
            onClick={() => toggleRegisteredUser(false)}
          >
            not yet registered?
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
