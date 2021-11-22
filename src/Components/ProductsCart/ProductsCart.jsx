import React, { useContext } from 'react'

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
                        <h2>{x !== false && x.name}</h2>
                        <h3>{x !== false && x.description}</h3>
                        <h2>{x !== false && x.price}</h2>
                        {/* <h2>{x !== false && x.amount}</h2> */}
                        <img src={ x !== false && x.imgs["img1"]} alt="" />                      
                        <button onClick={()=> dispatch({type:"REMOVE_FROM_CART", payload: x  })} className="border border-black">{x !== false && "delete"}</button>
                    </div>

                )
            }
            
        </div> 
    )
}

export default ProductsCart
