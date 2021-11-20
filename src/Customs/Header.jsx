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

    const handlerNavigate = ( loc ) =>{
        if ( loc === '/' ){
            navigate('/cart')
        }else if ( loc === '/cart'){
            navigate('/')
        }
    }


    return (
        <>
            <div className="header-container">
                <button onClick={handlerIcon}><i class={!icon ? "fas fa-align-justify" : "fab fa-diaspora"}></i></button>
                <img src={BlackLogoTrimmed} alt="logo" />
                <div
                    onClick={()=>handlerNavigate(pathname)}
                    className="cart-icon">
                    {pathname === '/' ? <i class="fas fa-cart-arrow-down"></i> : <i class="fas fa-undo-alt"></i>}
                    <h6>{pathname === '/' ? `${items} Obj.` : "Back to Home"}</h6>
                </div>
            </div>
            <ul className={!icon ? "ulHidden" : "ulVisible"}>
                <li>Home</li> 
                <li>Contact</li>
                <li>New Services</li>
                <li>Products</li>
                <li>Equipment</li>
            </ul>
        </>
    )
}

export default Header
