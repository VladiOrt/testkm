import React from "react";
import './index.scss'
import './stylemobile.scss'

import Logo from '../../img/beauty/pageone/Logo.png'
const BeautyPageOne = () =>{
    return(
        <div className="containerBeautyPageone">
           <section className="sectionOneBeautyPageOne">
                <div className="sectionContentOneBeautyPageOne"> 
                    <hr className="one" />
                    <hr className="two" />
                    <h2>Beauty</h2>
                    <div className="h1">
                        <img src={Logo} loading='lazy' ></img>
                    </div>
                    <div className="sello1"></div>
                    <div className="sello2"></div>
                </div>
           </section>
           <section className="sectionTwoBeautyPageOne">
        
           </section>
           <section className="sectionThreeBeatyPageOne">

           </section>
        </div>
    )
}
export default BeautyPageOne