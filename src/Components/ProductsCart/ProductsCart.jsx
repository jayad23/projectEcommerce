import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import "./ProductsCart.styles.css"
import ProductsContext from '../../Context/ProductsContext'


const ProductsCart = ( ) => {

    const { state, dispatch } = useContext(ProductsContext)

   

    return (
        
            <div className="productoss">

                {
                    state?.cart.map( x => 
                        
                        <div key={x.idCard} className={x !== false ? "products-cart" : "hidden"}>
                            <img src={ x !== false && x.imgs["img1"]} alt="" />                      
                            <h2>{x.name}</h2>
                            <h2>{`$ ${x.price}`}</h2>
                            <h2>{ `Cantidad: ${x.amount}` }</h2>
                            <button onClick={()=> dispatch ({type:"REMOVE_ONE", payload:  x })}>quitar</button>
                            <button onClick={()=> dispatch ({type:"ADD_TO_CART", payload: x })}>agregar</button>
                            <button onClick={()=> dispatch({type:"REMOVE_FROM_CART", payload: x  })} className=" bg-red-500 text-white py-1 px-3 rounded-xl">{x !== false && "delete"}</button>
                        </div>

                    )
                }
                        <div className="facturacion">
                            <h2>Datos de facturacion para el cliente</h2>
                            <h3>Cantidad de productos 20</h3>
                            <h4>impuestos 10</h4>
                            <h4>Precio total 500</h4>
                           <Link to="/checkout"> <button className="py-1 px-3 bg-green-600 text-white rounded-xl">Ir a Checkout</button></Link>
                        </div>
            </div>
    )
}

export default ProductsCart
