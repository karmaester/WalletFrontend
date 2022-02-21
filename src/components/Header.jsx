import React from 'react'

const Header = (props) => {

    return (
        <div>
            <div>Header</div>
            {props.handleLogout && <button onClick={props.handleLogout}>Logout</button>}
            <div>{props.loggedInStatus ? 'Logged' : 'Not Logged'}</div>
        </div>
    )
};

export default Header