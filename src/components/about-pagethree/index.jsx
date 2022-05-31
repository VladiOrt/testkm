import React, { useState } from "react";
import './index.scss'
import './stylemobil.scss'

const AboutPageThree = () =>{
    const[section,setSection] = useState('1');
    function Cambiar(id){
        setSection(id)
    }
    return(
        <div className="containerAboutPageThree">
           <section className="sectionOneAboutPageThree">
                <div className="sectionContentOneAboutPageThree"> 
                    <hr className="one" />
                    <div className="two" >
                        Deeply held beliefs that drive and direct our actions.
                    </div>
                    <h2>Company</h2>
                    <h1>Values</h1>
                    <div className="sello1">
                    </div>
                        
                    <div className="sello2">Deeply held beliefs that drive and direct our actions.</div>
                </div>
           </section>
           <section className="sectionTwoAboutPageThree">
                <div className="text">
                        <ul>
                            {  
                                section=='1'? <li onClick={()=>Cambiar(1)} className="selected" >1</li>:<li onClick={()=>Cambiar(1)} >1</li>
                            }
                            <li className="punto">.</li>
                              {  
                                section=='2'? <li onClick={()=>Cambiar(2)} className="selected" >2</li>:<li onClick={()=>Cambiar(2)} >2</li>
                            }
                            <li className="punto">.</li>
                              {  
                                section=='3'? <li onClick={()=>Cambiar(3)} className="selected" >3</li>:<li onClick={()=>Cambiar(3)} >3</li>
                            }
                            <li className="punto">.</li>
                              {  
                                section=='4'? <li onClick={()=>Cambiar(4)} className="selected" >4</li>:<li onClick={()=>Cambiar(4)} >4</li>
                            }                        
                        </ul>
                            {
                                section=='1'?
                                (
                                    <div className="textDentroUno">
                                        <section className="one">
                                            <div></div>
                                            <text>Integrity</text> 
                                        </section>
                                        <section className="two">
                                            <text>
                                                We are true to ourselves and to others.  We are honest in all our business dealings.
                                            </text>
                                        </section>
                                    </div>   
                                )                               
                                :""
                            }
                            
                            {
                                section=='2'?
                                (
                                    <div className="textDentroDos">
                                        <section className="one">
                                            <div></div>
                                            <text>Quality</text> 
                                            
                                        </section>
                                        <section className="two">
                                            <text>
                                                We aim to deliver the best and make it better, making experiential excellence our goal.
                                            </text>
                                        </section>
                                    </div>   
                                )                               
                                :""
                            }
                            {
                                section=='3'?
                                (
                                    <div className="textDentroTres">
                                        <section className="one">
                                            <div></div>
                                            <text>Reliability</text> 
                                            
                                        </section>
                                        <section className="two">
                                            <text>
                                                We keep our promises.  We are always available when needed.
                                            </text>
                                        </section>
                                    </div>   
                                )                               
                                :""
                            }

                            {
                                section=='4'?
                                (
                                    <div className="textDentroCuatro">
                                        <section className="one">
                                            <div></div>
                                            <text>Diversity</text> 
                                            
                                        </section>
                                        <section className="two">
                                            <text>
                                            We embrace change and respect differences, knowing that these attributes only make us stronger.
                                            </text>
                                        </section>
                                    </div>   
                                )                               
                                :""
                            }
                </div>
           </section>
           <section className="sectionThreeAboutPageThree">

           </section>
        </div>
    )
}
export default AboutPageThree