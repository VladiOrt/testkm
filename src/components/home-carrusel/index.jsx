import React, { useState } from "react";
import './index.scss'

import ImagenIzquierda from '../../img/home/pagefour/izquierda.svg'
import ImagenDerecha from '../../img/home/pagefour/derecha.svg'
const HomeCarrusel = () =>{


   const[spacio, setEspacio]  = useState('40')
    function DeslizarIzquierda(){
        const slider = document.getElementById("primero");
        let nuevoEspacio = (spacio-25)+"vw"
        setEspacio(spacio-25)

        slider.style.marginLeft= nuevoEspacio
    }
    function DeslizarDerecha(){
        const slider = document.getElementById("primero");
        let nuevoEspacio = (spacio+25)+"vw"
        setEspacio(spacio+25)

        slider.style.marginLeft= nuevoEspacio
    }

    return(
        <div className="containerHomeCarrusel">
            <section className="carrusel" id="carrusel">
                <div>
                    <div className="primero" id="primero">
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
               
            </section>
            <section className="controls">
                <img src={ImagenIzquierda} loading='lazy' onClick={()=> DeslizarIzquierda()}></img>
                <img src={ImagenDerecha} loading='lazy' onClick={()=> DeslizarDerecha()}></img>
            </section>
        
        </div>
    )
}
export default HomeCarrusel