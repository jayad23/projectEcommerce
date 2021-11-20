import React from 'react'
import { Link } from 'react-router-dom'

// Estilos

import "./Cart.styles.css"

const Cart = () => {
    return (
        <div>
            <h2>estamos en cart</h2>
            <Link to="/checkout"><button>Pagar</button></Link>
        </div>
    )
}

export default Cart
