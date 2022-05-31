import React, {useState} from "react";
import './index.scss'
import './stylemobile.scss'
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
                        <Link to="/" className="link"><text>Home</text></Link>
                        
                        <Link to="/about" className="link" onClick={()=>setEstado('0')}><text>About Us</text></Link>
                        <Link to="/beauty" className="link" onClick={()=>setEstado('0')}><text>Km beauty</text></Link>
                        <Link to="/lifestyle" className="link" onClick={()=>setEstado('0')}><text>Km lifestyle</text></Link>
                        <Link to="/education" className="link" onClick={()=>setEstado('0')}><text>Education</text></Link>
                        <Link to="/contact" className="link" onClick={()=>setEstado('0')}><text>Contact Us</text></Link>
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