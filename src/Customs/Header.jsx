import React, {useState, useContext} from 'react'
import BlackLogoTrimmed from "../Assets/BalckLogoTrimmed.png"
import { useNavigate } from 'react-router-dom'

import ProductsContext from '../Context/ProductsContext'

//Styles
import './Header.css'

const Header = () => {

    const {state} = useContext(ProductsContext)
    


    let numCart = state.amount.sort()
    let countCart = 1
    let arrayCart = []
    let arrayRepet = []

    for (let i = 0; i < numCart.length; i++) {

        if( numCart[i+1] === numCart[i] ){

            countCart++

        }else{
            arrayCart.push( numCart[i] )
            arrayRepet.push( countCart )
            countCart = 1
        }
        
    }


    //States
    const [icon, setIcon] = useState(false)

    //imported hooks
    const navigate = useNavigate()

    //functions of this component
    
    const handlerIcon = ()=>{
        setIcon(!icon)
    }




    return (
        <div className="contenedor-header">
            <div className="header-container">
                <button onClick={handlerIcon}><i className={!icon ? "fas fa-align-justify" : "fab fa-diaspora"}></i></button>
                <img src={BlackLogoTrimmed} alt="logo" />
                <div className="cart-icon" onClick={()=> navigate ("/cart")}>
                    
                    <i className="fas fa-cart-arrow-down"></i>
                    <h6>{arrayCart.length}</h6>
                    
                </div>
            </div>
            <ul className={!icon ? "ulHidden" : "ulVisible"}>
                <li onClick={()=> navigate ("/")}>Home</li> 
                <li onClick={()=> navigate ("/products")}>Products</li>
                <li onClick={()=> navigate ("/aboutus")}>About Us</li>
                <li onClick={()=> navigate ("/login")}>Loguin / Logout</li>
                <li onClick={()=> navigate ("/checkout")}>Checkout</li>
            </ul>
        </div>
    )
}

export default Header
