import React, { useEffect } from 'react'
import Header from '../header/Header'
import TransactionForm from '../TransactionForm'
import UserBalance from '../userBalance/UserBalance'
import styles from './home.module.scss'
import { useDispatch } from 'react-redux';
import { setPrice } from "../../redux/Price/price.actions";
import { setUser } from "../../redux/User/user.actions";
import { useSelector } from 'react-redux';
import { getUserState } from "../../redux/User/user.selectors";

const Home = (props) => {
  const dispatch = useDispatch();
  const globalUser = useSelector(getUserState);
  console.log("user in home:", props.user.user);

  useEffect(() => {
    if (!props.loading) {
      dispatch(setPrice(props.price));
      dispatch(setUser(props.user.user));
    }
  }, []);

  return (
    <div>
      <Header {...props} />
      <div className={styles.container}>
        {!props.user && (
          <div className={styles.welcome}>Bienvenid@ a WALLET APP, aquí podrás crear una cuenta con una cantidad ficticia de dólares y bitcoins, con ella podrás transar con el precio real del mercado y ver tu historial de transacciones.</div>
        )}
        <div className={styles.title}>Precio BTC</div>
        {props.loading ? <div className={styles.price}>Just a sec...</div> : <div className={styles.price}>{props.price}</div>}
        {props.user && (
          <div className={styles.container}>
            <UserBalance user={props.user} />
            <TransactionForm {...props} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home