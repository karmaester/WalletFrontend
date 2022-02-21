import React, { useState } from 'react'
import Header from '../header/Header'
import styles from './dashboard.module.scss'
import { useSelector } from 'react-redux';
import { getUserState } from "../../redux/User/user.selectors";
import UserBalance from '../userBalance/UserBalance';


const Dashboard = () => {
  const user = useSelector(getUserState);
  const [transactions, setTransactions] = useState([]);
  console.log("user: ");
  console.log(user.user.id);

  const getTransactions = () => {
    if (user) {
      fetch("http://localhost:3001/transactions",
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
        }).catch((err) => {
          console.log(err);
        });
    }
  };

  getTransactions();

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <UserBalance />
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