import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className="mt-10">
            <br />
            <h4>Welcome to Cart</h4>
            <br />
            <Link to="/checkout"><button className="border border-black py-1 px-4 rounded-2xl bg-black text-white">Go to Checkout</button></Link>
        </div>
    )
}

export default Cart
