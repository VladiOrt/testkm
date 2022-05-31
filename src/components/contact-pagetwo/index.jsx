import React from "react";
import './index.scss'
import './stylemobile.scss'

const ContactPageTwo= () =>{
    return(
        <div className="containerContactPageTwo">
           <section className="sectionOneContactPageTwo">
            <div className="Form">
                <div>
                    <label>Name</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Company/Organization</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" className="message"></input>
                </div>
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </div>
           </section>
           <section className="sectionTwoContactPageTwo">
                <div className="filtro">


                <div className="sello1"></div>
                <div className="sello2"></div>
                <div className="titulo">Contact Info</div>
                <div className="direccion">
                    Arquímedes 199, indoor 202, Polanco, CDMX, MX.<br/><br/>
                    #52 (55) 3032 5139<br/><br/>
                    hello@kasamasaryk.com
                </div>
                </div>
           </section>
        </div>
    )
}
export default ContactPageTwo