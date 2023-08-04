import { NavLink } from "react-router-dom";
import React from "react";
import "./footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Keep Score & Have Fun</h1>
                    <ul className="footer__list">
                        <li>
                            <NavLink to="/app/homepage" className="footer__link">Accueil</NavLink>
                        </li>

                        <li>
                            <NavLink to="/app/aboutus" className="footer__link">A propos</NavLink>
                        </li>

                        <li>
                            <NavLink to="/app/contact" className="footer__link">Contact</NavLink>
                        </li>
                    </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/"
                       className="footer__social-link"
                       target="_blank"
                    >
                        <InstagramIcon />
                    </a>

                    <a href="https://www.facebook.com/"
                       className="footer__social-link"
                       target="_blank"
                    >
                            <FacebookIcon />
                    </a>

                    <a href="https://www.github.com/"
                       className="footer__social-link"
                       target="_blank"
                    >
                            <GitHubIcon />
                    </a>

                    <a href="https://www.twitter.com/"
                       className="footer__social-link"
                       target="_blank"
                    >
                            <TwitterIcon />
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Keep Score & Have Fun. All rights reserved
                </span>

            </div>
        </footer>
    )
}

export default Footer;