import React from "react";
import './index.scss'
import './stylemobile.scss'

const HomePageTwo = () =>{
    return(
        <div className="containerHomePageTwo">
            <section className="sectionOneHomePageTwo">
                <div className="sello"><div/></div>
                <div className="lineaUno"></div>
                <div className="lineaDos"></div>
            </section>
            <section className="sectionTwoHomePageTwo">
                <div className="sectionTwoHomePageTwoFondo" />                
            </section>
            <section className="sectionThreeHomePageTwo">
                Welcome
            </section>
            <section className="sectionFourHomePageTwo">
                <text>
                    We are Kasa Masaryk, one of Latin America's 
                    leading partners in prestige beauty 
                    and luxury lifestyle.
                </text>
            </section>
        </div>
    )
}
export default HomePageTwo