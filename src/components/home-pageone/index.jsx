import React from "react";
import './index.scss'
import './stylemobile.scss'

import Logo from '../../img/home/pageone/Logo.png'
import Texto from '../../img/home/pageone/Texto.png'
const HomePageOne = () =>{
    return(
        <div className="containerHomePageone">
            <section className="sectionLeftHomePageOne">
                <img src={Logo}  loading='lazy'></img>
                <hr />
                <img src={Texto}  loading='lazy'></img>
                <hr />
                <text>MEXICO</text>
            </section>
            <section className="sectionRighttHomePageOne">
                <text className="text">
                        <label>
                            Unlocking Brand <br />
                            Potential in <br />
                            Latin America
                        </label>                
                </text>
                <div className="sello">
                    <div></div>
                </div>
            </section>            
        </div>
    )
}

export default HomePageOne