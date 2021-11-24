import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import "./ProductsCart.styles.css"
import ProductsContext from '../../Context/ProductsContext'


const ProductsCart = ( ) => {

    const { state, dispatch } = useContext(ProductsContext)

    // let numCart = state.amount.sort()   // [1,1,1,1, 2,2,3,3,3,4,4,4]
    // let countCart = 1
    // let arrayCart = []                  // [ 3, 5, 8]
    // let arrayRepet = []                //[5, 2, 3]

    // for (let i = 0; i < numCart.length; i++) {

    //     if( numCart[i+1] === numCart[i] ){

    //         countCart++
    // arrayRepet[arrayCart.indexOf(x.idCard)] = h2
    //     }else{
    //         arrayCart.push( numCart[i] )
    //         arrayRepet.push( countCart )
    //         countCart = 1
    //     }
        
    // }
    
    return (
        
            <div className="productoss">

                {
                    state?.cart.map( x => 
                        
                        <div key={x.idCard} className={x !== false ? "products-cart" : "hidden"}>
                            <img src={ x !== false && x.imgs["img1"]} alt="" />                      
                            <h2>{x.name}</h2>
                            <h2>{`$ ${x.price}`}</h2>
                            <h2>{ `Cantidad: ${state.count}` }</h2>
                            <button onClick={()=> dispatch ({type:"REMOVE_ONE_PRODUCT", payload:  x })}>quitar</button>
                            <button onClick={()=> dispatch ({type:"ADD_ONE_PRODUCT", payload: x })}>agregar</button>
                            <button onClick={()=> dispatch({type:"REMOVE_FROM_CART", payload: x  })} className=" bg-red-500 text-white py-1 px-3 rounded-xl">{x !== false && "delete"}</button>
                        </div>

                    )
                }
                        <div className="facturacion">
                            <h2>Datos de facturacion para el cliente</h2>
                            <h3>Cantidad de productos 20</h3>
                            <h4>impuestos 10</h4>
                            <h4>{state.priceTotal}</h4>
                           <Link to="/checkout"> <button className="py-1 px-3 bg-green-600 text-white rounded-xl">Ir a Checkout</button></Link>
                        </div>
            </div>
    )
}

export default ProductsCart
