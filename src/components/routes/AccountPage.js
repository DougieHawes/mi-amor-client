import { useState } from "react";

import "./style.min.css";

import Dashboard from "./accountroutes/Dashboard";
import Login from "./accountroutes/Login";
import Register from "./accountroutes/Register";

const AccountPage = () => {
  const [state, setState] = useState({
    showDashboard: false,
    showLogin: false,
    showRegister: true,
  });

  const { showDashboard, showLogin, showRegister } = state;

  return (
    <div className="route account">
      <div className="route-container">
        <h2 className="route-container-title">Account</h2>
        {showDashboard && <Dashboard />}
        {showLogin && (
          <Login
            onClick={() =>
              setState({
                showLogin: false,
                showRegister: true,
              })
            }
          />
        )}
        {showRegister && (
          <Register
            onClick={() =>
              setState({
                showLogin: true,
                showRegister: false,
              })
            }
          />
        )}
      </div>
    </div>
  );
};

export default AccountPage;
