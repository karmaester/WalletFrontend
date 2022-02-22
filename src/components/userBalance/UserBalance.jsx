import React from 'react'
import styles from './userBalance.module.scss'
import { useSelector } from 'react-redux';
import { getUserState } from "../../redux/User/user.selectors";
import { formatDollar, formatBitcoin } from '../../utils/format';

const UserBalance = () => {
    const globalUser = useSelector(getUserState);

    return (
        <div className={styles.container}>
            {globalUser.user !== undefined ? (
                <>
                    <div className={styles.description}>Tu saldo en dólares</div>
                    <div className={styles.balance}>{formatDollar(globalUser.user.dollar_balance)}</div>
                    <div className={styles.description}>Tu saldo en BTC</div>
                    <div className={styles.balance}>{formatBitcoin(globalUser.user.bitcoin_balance)}</div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default UserBalance