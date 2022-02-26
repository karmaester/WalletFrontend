import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import SignUp from "./components/register/Register";
import LogIn from "./components/login/Login";
import { useSelector } from 'react-redux';
import { getUserState } from "./redux/User/user.selectors";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [price, setPrice] = useState();
  const [loading, setLoading] = useState(false);
  const globalUser = useSelector(getUserState);

  const checkLoginStatus = () => {

    if (window.sessionStorage.getItem("session")) {
      let parsedUser = JSON.parse(window.sessionStorage.getItem("session"));
      setUser(parsedUser);
    } else if (globalUser !== false) {
      window.sessionStorage.setItem("session", JSON.stringify(globalUser));
      setUser(globalUser);
    } else {
      setUser(false);
    }
  };

  const getCurrentPrice = () => {
    setLoading(true);
    fetch("http://127.0.0.1:3001/current_price",
      {
        credentials: 'include'
      }
    )
      .then((response) => response.json())
      .then((data) => {
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

  const handleLogin = (data) => {
    setUser(data);
    window.sessionStorage.setItem("session", JSON.stringify(data));
    navigate('/', { replace: true })
  };

  return (
    <Routes>
      <Route path="/" element={<Home
        handleLogin={handleLogin}
        price={price}
        loading={loading}
        user={user}
        setUser={setUser}
      />} />
      <Route path="/dashboard" element={<Dashboard
      />} />
      <Route path="/registro" element={<SignUp
        handleLogin={handleLogin}
      />} />
      <Route path="/ingresar" element={<LogIn
        handleLogin={handleLogin}
      />} />
    </Routes>
  );
};

export default App;
