import React, {useState} from "react";
import './index.scss'

import { Link } from "react-router-dom";
const Header = () =>{

    const[estado,setEstado] = useState('0')
    return(
        <div className="containerGeneralHeader">
            
            {                
                estado =='0'?
                (
                    <section className="botonOpenOpen" onClick={()=>setEstado('1')}>
                        <hr className="lineOne"/>
                        <hr className="lineTwo"/>
                    </section>
                )
                :
                (
                    <section className="botonClose"  onClick={()=>setEstado('0')}>
                        <hr className="lineOne"/>
                        <hr className="lineTwo"/>
                    </section>
                )
                
            }
            {                
                estado =='1'?
                (<section className="imgOne"></section>)
                :
                ('')
             }
             {                
                estado =='1'?
                (<section className="imgDos">
                    <ul>
                        <Link to="/" className="link">Home</Link>
                        <Link to="/about" className="link">About Us</Link>
                        <Link to="/beauty" className="link">Km beauty</Link>
                        <Link to="/lifestyle" className="link">Km lifestyle</Link>
                        <Link to="/education" className="link">Education</Link>
                        <Link to="/contact" className="link">Contact Us</Link>
                    </ul>
                </section>)
                :
                ('')
             }
             {                
                estado =='1'?
                (<section className="imgTres"></section>)
                :
                ('')
             }
        </div>
    )
}

export default Header;