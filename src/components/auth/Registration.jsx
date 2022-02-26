import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  setUser
} from "../../redux/User/user.actions";
import { useDispatch } from 'react-redux';

const Registration = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [dollarBalance, setDollarBalance] = useState();
  const [bitcoinBalance, setBitcoinBalance] = useState();

  const handleSubmit = (event) => {
    axios
      .post(
        "https://karmaester-wallet-api.herokuapp.com/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            dollar_balance: dollarBalance,
            bitcoin_balance: bitcoinBalance,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.status === "created") {
          dispatch(setUser(response.data.user));
          props.handelSuccessfulAuth(response.data);
        }
      })
      .catch((err) => {
        console.log("registration error", err);
      });
    event.preventDefault();
  };

  return (
    <>
      <h3>Por favor ingrese sus datos y oprima el boton "Registrarme".</h3>
      <form className="">
        <input
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          label="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          name="password_confirmation"
          label="Password confirmation"
          placeholder="Password confirmation"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
        <br />
        <input
          label="Dollar balance"
          name="dollarBalance"
          type="number"
          placeholder="Dollar balance"
          value={dollarBalance}
          onChange={(e) => setDollarBalance(e.target.value)}
          required
        />
        <br />
        <input
          label="Bitcoin balance"
          name="bitcoinBalance"
          type="number"
          placeholder="Bitcoin balance"
          value={bitcoinBalance}
          onChange={(e) => setBitcoinBalance(e.target.value)}
          required
        />
        <br />
        <button onClick={handleSubmit}>
          Registrarme
        </button>
      </form>
    </>
  );
};

export default Registration;
