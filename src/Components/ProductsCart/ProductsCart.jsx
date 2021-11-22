import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import "./ProductsCart.styles.css"
import ProductsContext from '../../Context/ProductsContext'


const ProductsCart = ( ) => {

    const { state, dispatch } = useContext(ProductsContext)


    console.log(state)

    return (
        
            <div className="productoss">

                {
                    state?.cart.map( x => 
                        
                        <div className={x !== false ? "products-cart" : "hidden"}>
                            <img src={ x !== false && x.imgs["img1"]} alt="" />                      
                            <h2>{x !== false && x.name}</h2>
                            {/* <h3>{x !== false && x.description}</h3> */}
                            <h2>{x !== false && x.price}</h2>
                            {/* <h2>{x !== false && x.amount}</h2> */}
                            <button onClick={()=> dispatch({type:"REMOVE_FROM_CART", payload: x  })} className="border border-black">{x !== false && "delete"}</button>
                        </div>

                    )
                }
                        <div className="facturacion">
                            <h2>Datos de facturacion para el cliente</h2>
                            <h3>Cantidad de productos 20</h3>
                            <h4>impuestos 10</h4>
                            <h4>Precio total 500</h4>
                           <Link to="/checkout"> <button className="border border-black py-1 px-3 bg-black text-white">Ir a Checkout</button></Link>
                        </div>
            </div>
    )
}

export default ProductsCart
