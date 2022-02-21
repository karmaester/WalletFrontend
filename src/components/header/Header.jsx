import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';


const Header = (props) => {

    return (
        <div className={styles.container}>

            <Link to="/">
                <div className={styles.icon}>WALLET APP</div>
            </Link>
            {props.loggedInStatus ?
                <div className={styles.options}>
                    <nav>
                        <Link to="/dashboard">Ver mis transacciones</Link>
                    </nav>
                    <button onClick={props.handleLogout}>Logout</button>
                </div>
                :
                <nav className={styles.options}>
                    <Link to="/registro">Abrir nueva cuenta</Link>
                    <Link to="/ingresar">Ingresar</Link>
                </nav>}
        </div>
    )
};

export default Header