import React, { useState } from 'react'
import Header from '../header/Header'
import styles from './dashboard.module.scss'
import { useSelector } from 'react-redux';
import { getUserState } from "../../redux/User/user.selectors";


const Dashboard = (props) => {
  const user = useSelector(getUserState);
  const [transactions, setTransactions] = useState([]);
  console.log("user: ");
  console.log(user.user.id);

  const getTransactions = () => {
    if (user) {
      fetch("https://karmaester-wallet-api.herokuapp.com/transactions",
        {
          transaction: {
            user_id: user.user.id.toString(),
          }
        },
        {
          credentials: 'include'
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setTransactions(data.transactions);
          // setLoading(false);
        }).catch((err) => {
          console.log(err);
          // setLoading(false);
        });
    }
  }

  getTransactions();

  return (
    <div>
      <Header {...props} />
      <div className={styles.container}>
        <div>Tu saldo en dólares</div>
        <div>{user.user.dollar_balance.toString()}</div>
        <div>Tu saldo en BTC</div>
        <div>{user.user.bitcoin_balance.toString()}</div>
        {transactions.length > 0 && transactions.map((transaction, index) => {
          return (
            <div key={index}>
              <div>{transaction.from_currency}</div>
              <div>{transaction.sending_amount}</div>
              <div>{transaction.to_currency}</div>
              <div>{transaction.receiving_amount}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard