import React from 'react'
import Logo from "../../Assets/Logo.jpg"
import ColourLogo from "../../Assets/ColourLogo.png"
import BlackLogoBig from "../../Assets/BlackLogoBig.png"

// Styles
import "./Carrousell.styles.css"

const Carrousell = () => {
    return (


        <div className="slider-home-container">

            <div className="slides-home">
                <div className="slide">
                    <img src={Logo} alt="" />
                </div>
                <div className="slide">
                    <img src={ColourLogo} alt="" />
                </div>
                <div className="slide">
                    <img src={BlackLogoBig} alt="" />
                </div>
            </div>

            <div className="navigation-slide">
                <button></button>
                <button></button>
                <button></button>
            </div>

        </div>

    )
}

export default Carrousell