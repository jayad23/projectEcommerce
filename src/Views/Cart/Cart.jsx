import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div>
            <h4>Welcome to Cart</h4>
            <Link to="/checkout"><button>Go to Checkout</button></Link>
        </div>
    )
}

export default Cart
