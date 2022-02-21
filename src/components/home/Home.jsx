import React, { useEffect } from 'react'
import Header from '../header/Header'
import TransactionForm from '../TransactionForm'
import styles from './home.module.scss'
import { useDispatch } from 'react-redux';
import { setPrice } from "../../redux/Price/price.actions";
import { setUser } from "../../redux/User/user.actions";

const Home = (props) => {
  const dispatch = useDispatch();


  useEffect(() => {
    if (!props.loading) {
      dispatch(setPrice(props.price));
      dispatch(setUser(props.user.user));
    }
  }, [props.loading])

  return (
    <div>
      <Header {...props} />
      <div className={styles.container}>
        {!props.user && (
          <div className={styles.welcome}>Bienvenid@ a WALLET APP, aquí podrás crear una cuenta con una cantidad ficticia de dólares y bitcoins, con ella podrás transar con el precio real del mercado y ver tu historial de transacciones.</div>
        )}
        <div className={styles.title}>Precio BTC</div>
        {!props.loading && props.price && <div className={styles.price}>{props.price}</div>}
        {props.user && (
          <div className={styles.container}>
            <div>Tu saldo en dólares</div>
            <div>{props.user.user.dollar_balance.toString()}</div>
            <div>Tu saldo en BTC</div>
            <div>{props.user.user.bitcoin_balance.toString()}</div>
            <TransactionForm {...props} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home