import React, {useState} from 'react'
import Logo from '../Assets/Logo.png'
import { useNavigate, useLocation, Link } from 'react-router-dom'

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
        }else{
            navigate('/')
        }
    }


    return (
        <>
            <div className="header-container">
                <button onClick={handlerIcon}><i class={!icon ? "fas fa-align-justify" : "fab fa-diaspora"}></i></button>
                <img src={Logo} alt="logo" />
                <div
                    onClick={()=>handlerNavigate(pathname)}
                    className="cart-icon">
                    {pathname === '/' ? <i class="fas fa-cart-arrow-down"></i> : <i class="fas fa-undo-alt"></i>}
                    <h6>{pathname === '/' ? `${items} Obj.` : "Back to Home"}</h6>
                </div>
            </div>
            <ul className={!icon ? "ulHidden" : "ulVisible"}>
                <Link to="/"><li>Home</li></Link> 
                <Link to="/"><li>Products</li></Link> 
                <Link to="/"><li>New Services</li></Link> 
                <Link to="/"><li>Equipments</li></Link> 
                <Link to="/"><li>Contact</li></Link> 
            </ul>
        </>
    )
}

export default Header
