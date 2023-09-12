import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, useTheme } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { LoginInfo } from "../../global/MockData/LoginMock";
import { GlobalContext } from "../../global/globalContext/GlobalContext";

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { setSelected } = useContext(GlobalContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('none');

  const handleLogin = () => {
    // console.log(' login called with username ' + username + ' and password ' + password + ' Role ' + role);
    LoginInfo.forEach((userInfo) => {
      if (userInfo.username === username) {
        if (userInfo.password === password) {
          if (userInfo.roles.includes(role)) {
            console.log(' login called with username ' + username + ' and password ' + password + ' Role ' + role);
            localStorage.setItem("routeName", "Dashboard");
            setSelected("Dashboard");
            navigate("/mainpage/dashboard");
          }
        }
      }
    })
  }

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
        <label for="tab-1" className="tab">
          Login
        </label>

        <input id="tab-2" type="radio" name="tab" class="sign-up" />
        <label for="tab-2" className="tab">
          Sign Up
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label for="user" className="label">
                Username
              </label>
              <input id="user" type="text" className="input" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="group">
              <label for="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                className="input"
                data-type="password"
                type="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="role1">
              <label for="check">
                ROLE
              </label>
              <select className="inner-dropdown-all" value={role} onChange={(e) => setRole(e.target.value)} >
                <option className="inner-dropdown" value="none">None</option>
                <option className="inner-dropdown" value="admin">Admin</option>
                <option className="inner-dropdown" value="vendor">Vendor</option>
                <option className="inner-dropdown" value="user">User</option>
              </select>
            </div>

            <div className="group">
              <input type="submit" className="button" value="Login" onClick={() => handleLogin()} />
            </div>

            <div className="hr"></div>
            <div className="foot-lnk">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
          <div className="sign-up-htm">
            <div className="group">
              <label for="user" className="label">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Repeat Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Email Address
              </label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
