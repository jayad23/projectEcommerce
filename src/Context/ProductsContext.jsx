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
                name: 'Limpieza Facial',
                subname: 'Cuarzo Rosa',
                descp: "Elimina y remueve las impurezas y células muertas. Esto retrasa el envejecimiento, y la aparición de arrugas, la piel se vuelve más luminosa, suave y tersa.",
                price: 150000,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 2,
                name: 'Hydrafacial Basic',
                subname: 'Piel Mixta - Grasa',
                descp: "Hydrafacial Es el más reciente avance en rejuvenecimiento de la piel. Es un procedimiento único que combina limpieza, exfoliación, extracción, hidratación y protección antioxidante.",
                price: 140000,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 3,
                name: 'Hydrafacial Tonic',
                descp: "Combina en una misma sesión limpieza, extracción de impurezas, peeling, e infiltración de sueros para obtener una piel de aspecto fresco, saludable, radiante y brillante.",
                price: 180000,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 4,
                name: 'Drenaje Linfático',
                subname: 'Piernas cansadas',
                descp: "Con este servicio, estarías combatiendo lesiones musculares, hinchazón, retención de líquido intersticial, y celulitis entre muchas otras cosas más. ",
                price: 70000,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 5,
                name: 'Escleroterapia',
                subname: 'Complemento',
                descp: "Este servicio se ofrece por aparte, o en un paquete junto con nuestro Drenaje Linfático. ¡Mejora tu calidad de vida!",
                price: 50000,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 6,
                name: 'Limpieza Profunda',
                subname: 'Cuarzo Amatista',
                descp: "Experimenta el poder del cuarzo amatista para lograr una limpieza más profunda, extrayendo impurezas y regulando el flujo de oxígeno por tu piel.",
                price: 150000,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 7,
                name: 'Limpieza Facial',
                subname: 'Cuarzo Cristal',
                descp: "Peeling ultrasónico, Nutrición facial, Masaje facial + vibración cuarzo cristal, mascarilla de alta hidratación.",
                price: 130000,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 8,
                name: 'Radiofreciencia',
                descp: "Estimula el tejido conectivo para lograr una piel revitalizada y radiante. Esta técnica favorece la regeneración celular y estimula la producción natural de colágeno y elastina.",
                price: 150000,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 9,
                name: 'Ultrasonido',
                descp: "Los ultrasonidos se utilizan como tratamiento facial para estimular la producción de colágeno y tensar la piel eliminando la flacidez.",
                price: 150000,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 10,
                name: 'Microdermabrasion',
                descp: "Una de las técnicas más revolucionarias para mantener la piel suave, limpia y joven. Elimina las cicatrices y las manchas de la edad.",
                price: 150000,
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
