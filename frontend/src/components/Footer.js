import React from "react";
import '../sass/components/Footer.scss';

const Footer = ({footerLink, footerText}) => {
    return(
        <div className="footer">
            <a className="footer-link" href={footerLink}>
                {footerText}
            </a>
        </div>
    );
}

export default Footer;