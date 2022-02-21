import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import SignUp from "./components/Register";
import LogIn from "./components/Login";

const App = () => {
  const navigate = useNavigate();

  const [loggedStatus, setLoggedStatus] = useState(false);
  const [user, setUser] = useState(false);
  const [price, setPrice] = useState();
  const [loading, setLoading] = useState(false);

  const checkLoginStatus = () => {
    if (window.sessionStorage.getItem("session")) {
      let parsedUser = JSON.parse(window.sessionStorage.getItem("session"));
      setLoggedStatus(true);
      setUser(parsedUser);
    }
  };

  const getCurrentPrice = () => {
    setLoading(true);
    fetch("https://karmaester-wallet-api.herokuapp.com/current_price",
      {
        credentials: 'include'
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPrice(data.bpi.USD.rate);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    checkLoginStatus();
    getCurrentPrice();
  }, []);

  const handleLogout = () => {
    setLoggedStatus(false);
    setUser(false);
    window.sessionStorage.removeItem("session");
  };

  const handleLogin = (data) => {
    setLoggedStatus(true);
    setUser(data);
    window.sessionStorage.setItem("session", JSON.stringify(data));
    navigate('/', { replace: true })
  };

  return (
    <Routes>
      <Route path="/" element={<Home
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        loggedInStatus={loggedStatus}
        price={price}
        loading={loading}
        user={user}
        setUser={setUser}
      />} />
      <Route path="/dashboard" element={<Dashboard
        handleLogout={handleLogout}
        loggedInStatus={loggedStatus}
      />} />
      <Route path="/registro" element={<SignUp
        handleLogin={handleLogin}
        loggedInStatus={loggedStatus}
      />} />
      <Route path="/ingresar" element={<LogIn
        handleLogin={handleLogin}
        loggedInStatus={loggedStatus}
      />} />
    </Routes>
  );
};

export default App;
