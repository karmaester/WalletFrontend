import React from 'react'
import styles from './userBalance.module.scss'

const UserBalance = ({ user }) => {
    // console.log("user: ", user);
    return (
        <div className={styles.container}>
            {user.user !== undefined ? (
                <>
                    <div className={styles.description}>Tu saldo en dólares</div>
                    <div className={styles.balance}>{user.user.dollar_balance.toString()}</div>
                    <div className={styles.description}>Tu saldo en BTC</div>
                    <div className={styles.balance}>{user.user.bitcoin_balance.toString()}</div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default UserBalance