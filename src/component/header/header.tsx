import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../asset/crown.svg';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
            <Link className="option" to="/Shop">
                SHOP
            </Link>
            <Link className="option" to="/Contact">
                CONTACT
            </Link>
            </div>
        </div>
    )
}

export default Header;