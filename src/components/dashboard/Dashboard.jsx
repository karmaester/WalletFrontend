import React from 'react'
import Header from '../header/Header'
import styles from './dashboard.module.scss'


const Dashboard = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className={styles.container}>
        <div>Tu saldo en dólares</div>
        {/* <div>{props.user.dollar_balance.toString()}</div> */}
        <div>Tu saldo en BTC</div>
        {/* <div>{props.user.bitcoin_balance.toString()}</div> */}
      </div>
    </div>
  )
}

export default Dashboard