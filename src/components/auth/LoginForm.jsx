import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = ({ handleSuccessfulAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginErrors, setloginErrors] = useState("");

  const handleSubmit = (event) => {
    console.log("loading");
    axios
      .post(
        "http://localhost:3001/sessions",
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
          console.log("stop loading");
          handleSuccessfulAuth(response.data);
        }
      })
      .catch((err) => {
        console.log("stop loading - error");
        console.log("login error", err);
      });
    event.preventDefault();
  };

  return (
    <div className="">
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
    </div>
  );
};

export default Login;
