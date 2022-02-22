import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import styles from './dashboard.module.scss'
import { useSelector } from 'react-redux';
import { getUserState } from "../../redux/User/user.selectors";
import UserBalance from '../userBalance/UserBalance';
import { formatDollar, formatBitcoin } from '../../utils/format';

const Dashboard = () => {
  const user = useSelector(getUserState);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = () => {
    if (user) {
      fetch(`https://karmaester-wallet-api.herokuapp.com/users/${user.user.id}/transactions`,
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

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <UserBalance />
        {transactions.length > 0 && transactions.map((transaction, index) => {
          return (
            <div className={styles.card} key={index}>
              <div>Compraste:</div>
              <div>{transaction.to_currency}</div>
              <div>{transaction.to_currency == 'Dollar' ?
                formatDollar(transaction.receiving_amount) :
                formatBitcoin(transaction.receiving_amount)
              }
              </div>
              <div>Costo de operación:</div>
              <div>{transaction.to_currency == 'Bitcoin' ?
                formatDollar(transaction.sending_amount) :
                formatBitcoin(transaction.sending_amount)
              }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard