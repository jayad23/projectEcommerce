import React, {useState} from 'react'
import BlackLogoTrimmed from "../Assets/BalckLogoTrimmed.png"
import { useNavigate, useLocation } from 'react-router-dom'
//Styles
import './Header.css'

const Header = () => {
    //States
    const [icon, setIcon] = useState(false)
    const [items, setItems] = useState(1)

    //imported hooks
    const { pathname } = useLocation()
    const navigate = useNavigate()

    //functions of this component
    
    const handlerIcon = ()=>{
        setIcon(!icon)
    }




    return (
        <>
            <div className="header-container">
                <button onClick={handlerIcon}><i class={!icon ? "fas fa-align-justify" : "fab fa-diaspora"}></i></button>
                <img src={BlackLogoTrimmed} alt="logo" />
                <div className="cart-icon" onClick={()=> navigate ("/cart")}>
                    
                    <i class="fas fa-cart-arrow-down"></i>
                    <h6>{`${items}`}</h6>
                    
                </div>
            </div>
            <ul className={!icon ? "ulHidden" : "ulVisible"}>
                <li onClick={()=> navigate ("/")}>Home</li> 
                <li onClick={()=> navigate ("/products")}>Products</li>
                <li onClick={()=> navigate ()}>New Services</li>
                <li onClick={()=> navigate ()}>Equipment</li>
                <li onClick={()=> navigate ()}>Contact</li>
            </ul>
        </>
    )
}

export default Header
