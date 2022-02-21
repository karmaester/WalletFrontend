import React from 'react';
import Login from "../auth/LoginForm";
import Header from "../header/Header";
import styles from "./login.module.scss";

const LogIn = ({ handleLogin }) => {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Login handleSuccessfulAuth={handleLogin} />
      </div>
    </>
  );
};

export default LogIn;
