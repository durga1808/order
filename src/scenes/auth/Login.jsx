import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, CircularProgress, FormControl, MenuItem, Typography, useTheme } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { LoginInfo } from "../../global/MockData/LoginMock";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { getServiceList, loginUser } from "../../api/LoginApiService";
import Loading from "../../global/Loading/Loading";
import observai from "../../assets/observai.png"

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { setServiceList, setSelected } = useContext(GlobalContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("none");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [serviceListData, setServiceListData] = useState([]);

  const servicePayload = (serviceData) => {
    serviceData.forEach((item) => {
      serviceListData.push(item.serviceName);
    });
    localStorage.setItem("serviceListData", JSON.stringify(serviceListData));
    console.log("ServiceName " + serviceListData);
  };

  const getServiceListCall = async (userInfo) => {
    try {
      const serviceData = await getServiceList(userInfo);
      console.log("ServiceList " + JSON.stringify(serviceData));
      if (serviceData !== 0) {
        setServiceList(serviceData);
        servicePayload(serviceData);
        navigate("/mainpage/dashboard");
      } else {
        setErrorMessage("No Service assigned for this user");
      }
    } catch (error) {
      console.log("error " + error);
      setErrorMessage("An error occurred");
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    localStorage.setItem("routeName", "Dashboard");
    setSelected("Dashboard");
    if (!username || !password) {
      setErrorMessage("Please fill in all fields.");
       setLoading(false);
      return;
    }

    const payload = {
      username: username,
      password: password,
      // roles: [role],
    };
      console.log("Inside setTimeout");
    const userAuth = await loginUser(payload);

    if (userAuth.status === 200) {
      console.log("login", username, password, role);
      localStorage.setItem("userInfo", JSON.stringify(userAuth.data));
      getServiceListCall(userAuth.data);
      setLoading(false);
      console.log(payload)
    } else if (userAuth.response.status === 401) {
      setLoading(false);
      setErrorMessage(userAuth.response.data);
    } else if (userAuth.response.status === 404) {
      setLoading(false);
      setErrorMessage(userAuth.response.data);
    } else if (userAuth.response.status === 403) {
      setLoading(false);
      setErrorMessage(userAuth.response.data);
    } else {
      setLoading(false);
      setErrorMessage("Something went wrong. Please try again later.");
    }  

  }

  return (
    <div className="login-container">

      <div className="login-form-container">
        <div className="login-card">
          <h1>LOGIN</h1>
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            style={{ fontFamily: "Red Hat Display", fontSize: "16px" }}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            style={{ fontFamily: "Red Hat Display", fontSize: "16px" }}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 18,
                margin: 5,
              }}
            >
              <Typography
                variant="h6"
                style={{ fontFamily: "Red Hat Display, sans-serif" }}
              >
                Loading...
              </Typography>
            </div>
          ) : (
            <Button
              sx={{
                m: 2,
                width: "10%",
                backgroundColor: colors.greenAccent[500],
                color: colors.grey[100],
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: colors.primary[600],
                },
              }}
              variant="contained"
              onClick={() => handleLogin()}
            >
              LOGIN
            </Button>
          )}

        </div>
        <div className="login-card-details">
          <img src={observai} alt="observai" style={{ width: "450px", height: "250px" }}/>
          <Typography variant="h5" style={{ padding: "10px", textAlign: "justify" }}>Three  pillars of Observability . Unify Trace , Metrics, Log in one place with ZAGA Observability. A full-stack hybrid cloud Observability solution built to optimize performance, ensure availability, and reduce remediation time.</Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
