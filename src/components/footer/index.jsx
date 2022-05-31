import React from "react";
import './index.scss'
import './stylemobile.scss'

import { Link } from "react-router-dom";
import Logo from '../../img/footer/Logo.png'

const Footer = () =>{
    return(
        <div className="containerGeneralFooter">
            <section className="sectionOneFooter">
                <img src={Logo}></img>
            </section>
            <section className="sectionTwoFooter">
                <ul>
                    <li><Link to="/" className="link">HOME</Link></li>
                    <li><Link to="/about" className="link">ABOUT US</Link></li>
                    <li><Link to="/beauty" className="link">KM BEAUTY</Link></li>
                    <li><Link to="/lifestyle" className="link">KM LIFESTYLE</Link></li>
                    <li><Link to="/education" className="link">EDUCATION</Link></li>
                    <li><Link to="/contact"className="link">CONTACT US</Link></li>                  
                </ul>
            </section>
        </div>
    )
}

export default Footer;