import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  setUser
} from "../../redux/User/user.actions";
import { useDispatch } from 'react-redux';

import styles from './login.module.scss';

const Login = ({ handleSuccessfulAuth }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    console.log("loading");
    axios
      .post(
        "http://127.0.0.1:3001/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.logged_in) {
          dispatch(setUser(response.data.user));
          handleSuccessfulAuth(response.data);
        }
        else if (response.data.status === 401) {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        };
      })
      .catch((err) => {
        console.log("login error", err);
      });
    event.preventDefault();
  };

  return (
    <>
      <h3>Por favor ingrese email y contraseña.</h3>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="email"
          label="Email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          label="Contraseña"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">
          Ingresar
        </button>
      </form>
      {error && <p className={styles.error}>Usuario o contraseña incorrectos</p>}
    </>
  );
};

export default Login;
