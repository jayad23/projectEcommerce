import React, { createContext, useReducer } from 'react'
import img1 from '../Imgs/img1.jpg'
import img2 from '../Imgs/img2.jpg'
import img3 from '../Imgs/img3.jpg'

const ProductsContext = createContext()

const reducer = ( state, action )=>{

    switch ( action.type ) {
        case "ADD_TO_CART":
            
            return{
                ...state,
                cart:[ ...state.cart, state.amount.includes( action.payload.idCard) ? false : action.payload  ],
                priceTotal: state.priceTotal + action.payload.price,
                amount:[ ...state.amount.sort(), action.payload.idCard ]
            }
         case "REMOVE_FROM_CART":
             console.log(action.payload)
             return{

                ...state,
                cart: state.cart.filter( ( x )=> x.idCard !== action.payload.idCard ),
                priceTotal: state.priceTotal - action.payload.price,
                amount: state.amount.filter( ( y ) => y !== action.payload.idCard )
             }       
            
        default:
            return state
    }

}

const ProductsContextProvider = ({children}) => {

    const inicialState = {
        products: [
            {   
                id: 1,
                name: 'Product 1',
                descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, minus?",
                price: 350,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 2,
                name: 'Product 1',
                descp: "Lorem consectetur adipisicing elit. Recusandae quis facilis libero.asaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaa",
                price: 550,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 3,
                name: 'Product 1',
                descp: "Lorem ipsum   Molestias culpa hic, pariatur dignissimos aperiam fugiat.",
                price: 150,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 4,
                name: 'Product 1',
                descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem.",
                price: 150,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 5,
                name: 'Product 1',
                descp: "Lorem, ipsum dolor  Nesciunt iusto ipsam est placeat in minus quas.",
                price: 150,
                img:{
                    img1,
                    img2,
                    img3
                }
            }

        ],
        cart: [],
        priceTotal: 0,
        amount:[]
    }

    
    const [state, dispatch] = useReducer( reducer, inicialState )


    const data = {
        state, dispatch
    }

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContextProvider }
export default ProductsContext
