import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import "./ProductsCart.styles.css"
import ProductsContext from '../../Context/ProductsContext'


const ProductsCart = ( ) => {

    const { state, dispatch } = useContext(ProductsContext)

   console.log(state.priceTotal)

    return (
        
            <div className="productoss">

                {
                    state?.cart.map( x => 
                        
                        <div key={x.idCard} className={x !== false ? "products-cart" : "hidden"}>
                            <img src={ x !== false && x.imgs["img1"]} alt="" />                      
                            <h2 className="product-name">{x.name}</h2>
                            <h2>{`$ ${x.price} USD`}</h2>
                            <h2>{ `Cantidad: ${x.amount}` }</h2>
                           
                            <button onClick={()=> dispatch ({type:"REMOVE_ONE", payload:  x })}><i className="fas fa-minus rotate"></i></button>
                            <button onClick={()=> dispatch ({type:"ADD_TO_CART", payload: x })}><i className="fas fa-plus rotate"></i></button>
                            <button onClick={()=> dispatch({type:"REMOVE_FROM_CART", payload: x  })} className=" bg-red-700 text-white py-1 px-2 rounded-xl">{x !== false && "Quitar"}</button>
                        </div>

                    )
                }
                        <div className="facturacion">
                            <h2 className="font-bold">DATOS DE FACTURACION</h2>
                           <div className="datos">
                            <h3>{`Productos Seleccionados: ${state.cart.length}`}</h3>                          
                            <h3>{

                               `Productos Totales: ${ state.cart.length > 0 ? state?.cart?.map( a => a.amount).reduce( (a,b)=> a+b) : 0}`
  
                            }</h3>
                            <h4>{`Precio Total: $ ${state.priceTotal}`}</h4>
                           </div>
                          
                        </div>
            </div>
    )
}

export default ProductsCart
