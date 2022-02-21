import React from 'react';
import Login from "./auth/LoginForm";
import Header from "./Header";

const LogIn = ({ handleLogin }) => {

  return (
    <div className="">
      <Header />
      <h3>Login</h3>
      <div className="">
        <Login handleSuccessfulAuth={handleLogin} />
      </div>
    </div>
  );
};

export default LogIn;
