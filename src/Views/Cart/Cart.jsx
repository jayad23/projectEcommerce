import React, { useContext } from 'react'

import "./Cart.styles.css"


import ProductsContext from '../../Context/ProductsContext'
import ProductsCart from '../../Components/ProductsCart/ProductsCart'

const Cart = () => {

    const { state, dispatch } = useContext( ProductsContext )
   

    return (
        <div className="contenedor-cart">

           <ProductsCart />

           
        </div>
    )
}

export default Cart
