import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, CircularProgress, Typography, useTheme } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { LoginInfo } from "../../global/MockData/LoginMock";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { getServiceList, loginUser } from "../../api/LoginApiService";
import Loading from "../../global/Loading/Loading";


const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { setServiceList, setSelected } = useContext(GlobalContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('none');
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getServiceListCall = async (userInfo) => {
    try {
      const serviceData = await getServiceList(userInfo);
      console.log("ServiceList " + JSON.stringify(serviceData));
      if (serviceData !== 0) {
        setServiceList(serviceData);
      }
    } catch (error) {
      console.log("error " + error);
    }
  }

  const handleLogin = async () => {
    setLoading(true);
    localStorage.setItem("routeName", "Dashboard");
    setSelected("Dashboard");
    if (!username || !password || !role) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const payload = {
      username: username,
      password: password,
      roles: [role],
    };

    const userAuth = await loginUser(payload);
    // console.log(userAuth);

    // console.log(' login called with username ' + username + ' and password ' + password + ' Role ' + role);
    // LoginInfo.forEach((userInfo) => {    // LoginInfo is mock data
    //   if (userInfo.username === username) {
    //     if (userInfo.password === password) {
    //       if (userInfo.roles.includes(role)) {
    //         console.log(' login called with username ' + username + ' and password ' + password + ' Role ' + role);
    //         localStorage.setItem("routeName", "Dashboard");
    //         setSelected("Dashboard");
    //         navigate("/mainpage/dashboard");
    //       }
    //     }
    //   }
    // })


    if (userAuth.status === 200) {
      console.log("login", username, password, role);
      // setUserInfo(userAuth.data);
      localStorage.setItem("userInfo", JSON.stringify(userAuth.data));
      getServiceListCall(userAuth.data);
      setLoading(false);
      navigate("/mainpage/dashboard");
    }
    else if (userAuth.response.status === 401) {
      setLoading(false);
      setErrorMessage(userAuth.response.data);
    } else if (userAuth.response.status === 404) {
      setLoading(false);
      setErrorMessage(userAuth.response.data);
    } else if (userAuth.response.status === 403) {
      setLoading(false);
      setErrorMessage(userAuth.response.data);
    }
    else {
      setLoading(false);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };


  return (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label for="tab-1" className="tab">
          Login
        </label>

        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label for="tab-2" className="tab">

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

            {errorMessage ? (<Typography variant="h6" style={{color:colors.redAccent[500], textAlign:"center",marginTop:"30px"}} >{errorMessage}</Typography>) : null}

            {loading ? (<div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", width: "100%", height:"20vh" }}>
            <CircularProgress style={{ color: colors.blueAccent[400] }} size={40} thickness={4} />
            <Typography variant="h5" fontWeight={"600"} mt={2}>
                LOADING.....
            </Typography>
        </div>) : (<div className="group">
              <input type="submit" className="button" value="Login" onClick={() => handleLogin()} />
            </div>)}

            {/* <div className="hr"></div>
            <div className="foot-lnk">
              <a href="#forgot">Forgot Password?</a>
            </div> */}
          </div>
          {/* <div className="sign-up-htm">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
