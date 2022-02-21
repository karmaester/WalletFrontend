import React from 'react'
import Header from './Header'
import TransactionForm from './TransactionForm'

const Home = (props) => {
  return (
    <div>
      <Header {...props} />
      <div>Home</div>
      {!props.loading && props.price && <div>{props.price}</div>}
      {props.user && (
        <div>
          <div>Tu saldo en dólares</div>
          <div>{props.user.user.dollar_balance.toString()}</div>
          <div>Tu saldo en BTC</div>
          <div>{props.user.user.bitcoin_balance.toString()}</div>
          <TransactionForm {...props} />
        </div>
      )}
    </div>
  )
}

export default Home