import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <header>
            <a className="header__title" href="#">what happened</a>
            <nav className="header__links">
                <a className="header__link" href="#">introduce</a>
                <a className="header__link" href="#">solution</a>
                <a className="header__link right-wall" href="#">rate plan</a>
                <a className="header__link" href="#">login</a>
                <a className="header__link" href="#">apply for free use</a>
            </nav>
            <div className="header__menu-icon" href="#">menu</div>
        </header>
    )
}

export default Header;