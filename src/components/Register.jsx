import React from 'react';
import Registration from "./auth/Registration";
import Header from "./Header";

const SignUp = ({ handleLogin }) => {

  return (
    <div>
      <Header />
      <h3>Register</h3>
      <div className="">
        <Registration handelSuccessfulAuth={handleLogin} />
      </div>
    </div>
  );
};

export default SignUp;
