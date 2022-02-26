import React, { useEffect } from 'react'
import Header from '../header/Header'
import TransactionForm from '../transactionForm/TransactionForm'
import UserBalance from '../userBalance/UserBalance'
import styles from './home.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from "../../redux/Price/price.actions";
import { getUserState } from "../../redux/User/user.selectors";
import {
  setUser
} from "../../redux/User/user.actions";

const Home = (props) => {
  const user = useSelector(getUserState);
  const dispatch = useDispatch();

  const getUpdatedUser = () => {
    if (user) {
      fetch(`https://karmaester-wallet-api.herokuapp.com/users/${user.user.id}`,
        {
          credentials: 'include'
        }
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(setUser(data.user));
          console.log("User updated: ", data.user);
        }).catch((err) => {
          console.log(err);
        });
    }
  };

  const reloadUser = () => {
    getUpdatedUser();
  };

  useEffect(() => {
    if (!props.loading) {
      dispatch(setPrice(props.price));
    }
  }, []);

  return (
    <div>
      <Header {...props} />
      <div className={styles.container}>
        {!user.user && (
          <div className={styles.welcome}>Bienvenid@ a WALLET APP, aquí podrás crear una cuenta con una cantidad ficticia de dólares y bitcoins, con ella podrás transar con el precio real del mercado y ver tu historial de transacciones.</div>
        )}
        <div className={styles.title}>Precio BTC</div>
        {props.loading ? <div className={styles.price}>Just a sec...</div> : <div className={styles.price}>{props.price}</div>}
        {user.user && (
          <div className={styles.container}>
            <UserBalance />
            <TransactionForm price={props.price} reloadUser={reloadUser} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home