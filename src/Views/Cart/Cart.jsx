import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Cart.styles.css"

import ProductsContext from '../../Context/ProductsContext'
import ProductsCart from '../../Components/ProductsCart/ProductsCart'

const Cart = () => {

    const { state, dispatch } = useContext( ProductsContext )
   

    return (
        <div className="contenedor-cart">
           
           <ProductsCart />

            {/* <Link to="/checkout"><button className="border border-black py-1 px-4 rounded-2xl bg-black text-white">Go to Checkout</button></Link> */}
        </div>
    )
}

export default Cart
