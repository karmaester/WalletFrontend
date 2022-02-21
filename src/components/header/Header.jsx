import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    setUser
} from "../../redux/User/user.actions";
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom";
import styles from './header.module.scss';


const Header = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [loggedStatus, setLoggedStatus] = useState(false);

    const checkLoginStatus = () => {
        if (window.sessionStorage.getItem("session")) {
            setLoggedStatus(true);
        }
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const handleLogout = () => {
        setLoggedStatus(false);
        dispatch(setUser(false));
        window.sessionStorage.removeItem("session");
        navigate('/', { replace: true })
    };

    return (
        <div className={styles.container}>

            <Link to="/">
                <div className={styles.icon}>WALLET APP</div>
            </Link>
            {loggedStatus ?
                <div className={styles.options}>
                    <nav>
                        <Link to="/dashboard">Ver mis transacciones</Link>
                    </nav>
                    <button onClick={handleLogout}>Logout</button>
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