import React from "react";
import './index.scss'
import Logo from '../../img/beauty/pageone/Logo.png'
const LifeStylePageOne = () =>{
    return(
        <div className="containerLifeStylePageOne">
           <section className="sectionOneLifeStylePageOne">
                <div className="sectionContentOneLifeStylePageOne"> 
                    <hr className="one" />
                    <hr className="two" />
                    <h2>Lifestyle</h2>
                    <div className="h1">
                        <img src={Logo}></img>
                    </div>
                    <div className="sello1"></div>
                    <div className="sello2"></div>
                </div>
           </section>
           <section className="sectionTwoLifeStylePageOne">
        
           </section>
           <section className="sectionThreeLifeStylePageOne">

           </section>
        </div>
    )
}
export default LifeStylePageOne