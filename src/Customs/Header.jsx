import React, {useState, useContext} from 'react'
import BlackLogoTrimmed from "../Assets/BalckLogoTrimmed.png"
import { useNavigate, useLocation } from 'react-router-dom'

import ProductsContext from '../Context/ProductsContext'

//Styles
import './Header.css'

const Header = () => {

    const {state} = useContext(ProductsContext)
    



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
        <div className="contenedor-header">
            <div className="header-container">
                <button onClick={handlerIcon}><i class={!icon ? "fas fa-align-justify" : "fab fa-diaspora"}></i></button>
                <img src={BlackLogoTrimmed} alt="logo" />
                <div className="cart-icon" onClick={()=> navigate ("/cart")}>
                    
                    <i class="fas fa-cart-arrow-down"></i>
                    <h6>{state.cart.length > 0 ? state?.cart?.map( a => a.amount).reduce( (a,b)=> a+b) : 0}</h6> 
                    
                </div>
            </div>
            <ul className={!icon ? "ulHidden" : "ulVisible"}>
                <li onClick={()=> navigate ("/")}>Home</li> 
                <li onClick={()=> navigate ("/products")}>Products</li>
                <li onClick={()=> navigate ("/aboutus")}>About Us</li>
                <li onClick={()=> navigate ("/login")}>Loguin / Logout</li>
                <li onClick={()=> navigate ("/testimonials")}>Testimonials</li>
            </ul>
        </div>
    )
}

export default Header
