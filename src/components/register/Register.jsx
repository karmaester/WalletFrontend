import React from 'react';
import Registration from "../auth/Registration";
import Header from "../header/Header";
import styles from "./register.module.scss";


const SignUp = ({ handleLogin }) => {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Registration handelSuccessfulAuth={handleLogin} />
      </div>
    </div>
  );
};

export default SignUp;
