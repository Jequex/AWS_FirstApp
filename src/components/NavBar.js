import React from 'react';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const NavBar = ({setApp, app}) => {
    return (
        <div className="App-navbar">
            <div><strong>TESTING APP</strong></div>
            <div>
                <Link to='/'>HOME</Link>
                <Link to='/user'>USERS</Link>
                <Link to='/shipment'>SHIPMENT</Link>
                <Link to='/booking'>BOOKING</Link>
            </div>
            <div>
                <AmplifySignOut />
            </div>
        </div>
    )
}

export default NavBar;
