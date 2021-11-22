import React from 'react'
import "./AboutUs.styles.css"

import imgMapaEcomerce from "../../Assets/imgMapaEcomerce.png"

const AboutUs = () => {
    return (
        <div className="contenedor-about">
           <h2>welcome to about us</h2>
           
           <h3 className="text-center py-2">¿ Como llegar ?</h3>
           <div className="contenedor-map">
             <a href="https://www.google.com/maps/place/Cl%C3%ADnica+Oftalmol%C3%B3gica+de+Antioquia+-+Clof%C3%A1n/@6.2232396,-75.5768039,17z/data=!3m1!4b1!4m5!3m4!1s0x8e4429ccac1d781b:0x756dde10c43680e8!8m2!3d6.2232349!4d-75.574882" target="_blanck" rel="noreferrer"><img src={imgMapaEcomerce} alt="" /></a>
           </div>
        </div>
    )
}

export default AboutUs
