import React from "react";
import './index.scss'

import ComillasIzquierda from '../../img/home/pagefive/comilllasIzq.png'
import ComillasDer from '../../img/home/pagefive/comillasDer.png'
const HomePageFive = () =>{
    return(
        <div className="containerHomePageFive">
            <section className="sectionOneHomePageFive">
                <div className="text">
                    <hr />
                    <text>            
                        <label>
                            INTEGRATED & OMNICHANNEL
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                            Applying consumer-centric distribution foundations, 
                            we multiply our effectiveness in consumer engagement,
                            brand-building and sales across Latin America.
                        </label>                        
                    </text>
                </div>
                <div className="sectionFondoOneHomePageFive" />  
            </section>
            <section className="sectionTwoHomePageFive">
                <h2>We Drive Brand</h2>
                <h1>Success</h1>
                <text>
                    
                    <text>
                    
                        <div className="comillaDerecha"><img src={ComillasIzquierda} /></div>
                        Latin America will be one of the fastest-growing markets globally. 
                        The region will easily outpace North America (1.8 percent) and 
                        Europe (1.9 percent) over the same period.
                        <div className="comillaIzquierda">  <img src={ComillasDer}  className='comillasDer'/></div>                  
                    </text>
                    <label>
                        -	BMI Research
                    </label>
                    <div className="sello"><div></div></div>
                </text>
            </section>
        </div>
    )
}
export default HomePageFive