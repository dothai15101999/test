import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer__main">
                <ul className="footer__links">
                    <li><a className="footer__link" href="#">what happened</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                </ul>
                <ul className="footer__links">
                    <li><a className="footer__link" href="#">about us</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                </ul>
                <ul className="footer__links">
                    <li><a className="footer__link" href="#">my order</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                </ul>
                <ul className="footer__links">
                    <li><a className="footer__link" href="#">my account</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                </ul>
                <ul className="footer__links">
                    <li><a className="footer__link" href="#">help</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                    <li><a className="footer__link" href="#">options</a></li>
                </ul>
            </div>
            <div className="footer__infos">
                <div className="footer__info">
                    <i className="far fa-copyright"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea rerum,
                    expedita ad natus, amet dignissimos porro labore maiores nulla tenetur
                    modi dolore quod veritatis, perspiciatis excepturi eum est facere id!
                </div>
                <div className="footer__logos">
                    <div className="footer__logo"><i className="fab fa-facebook"></i></div>
                    <div className="footer__logo"><i className="fab fa-twitter-square"></i></div>
                    <div className="footer__logo"><i className="fab fa-instagram"></i></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;