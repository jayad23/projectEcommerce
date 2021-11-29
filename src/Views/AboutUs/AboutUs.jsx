import React from 'react'
import "./AboutUs.styles.css"
import { Link } from 'react-router-dom'

import imgMapaEcomerce from "../../Assets/imgMapaEcomerce.png"

const AboutUs = () => {
    return (
        <div className="contenedor-about">
         <div className="container-general">

              <div className="container-info">
                <h2>Sobre nosotros</h2>
                <p>Bienvenidos a L A U R A  A R A N G O, cosmetóloga y esteticista.
                Somos un consultorio cuya misión principal es ayudarte a encontrar paz, y tranquilidad a pesar del estrés del día a día. 
                Utilizamos técnicas revolucionarias, con aparatos de última tecnología que te llevaran a la imagen que deseas de ti mismo… tanto interna, como externa.
                Nuestros servicios tienen un amplio rango. Podemos ayudarte sea cual sea tu profesión, o cuán agudo sea el problema que quieras solucionar. 
                entendemos que deseas una vida plena; poder trabajar y disfrutar el resultado de tu trabajo con las personas que amas, garantizando, una vez empieces tu tratamiento con nosotros, una vida llena de momentos de calidad.</p>
              </div>
            
              <div className="container-map">
                <h3 className="text-center py-2 my-2">Nuestra ubicacion</h3>
                <div className="contenedor-map">
                  <a href="https://www.google.com/maps/place/Cl%C3%ADnica+Oftalmol%C3%B3gica+de+Antioquia+-+Clof%C3%A1n/@6.2232396,-75.5768039,17z/data=!3m1!4b1!4m5!3m4!1s0x8e4429ccac1d781b:0x756dde10c43680e8!8m2!3d6.2232349!4d-75.574882" target="_blanck" rel="noreferrer"><img src={imgMapaEcomerce} alt="" /></a>
                </div>
              </div>
         </div>

          <div className="icon-dev">
              <Link to="/developers"><i className="fas fa-code "></i></Link>
          </div>
           
        </div>
    )
}

export default AboutUs
