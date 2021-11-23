import React, { createContext, useReducer } from 'react'
import Amatista1 from '../Imgs/Amatista1.jpg'
import Amatista2 from '../Imgs/Amatista2.png'
import Amatista3 from '../Imgs/Amatista3.png'
import Cristal1 from '../Imgs/Cristal1.png'
import Cristal2 from '../Imgs/Cristal2.png'
import Cristal3 from '../Imgs/Cristal3.jpg'
import QuarzoRosa1 from '../Imgs/QuarzoRosa1.jpg'
import QuarzoRosa2 from '../Imgs/QuarzoRosa2.png'
import QuarzoRosa3 from '../Imgs/QuarzoRosa3.png'
import Hydrafacial1 from '../Imgs/Hydrafacial1.jpg'
import Hydrafacial2 from '../Imgs/Hydrafacial2.png'
import Hydrafacial3 from '../Imgs/Hydrafacial3.png'
import Tonic1 from '../Imgs/Tonic1.jpg'
import Tonic2 from '../Imgs/Tonic2.png'
import Tonic3 from '../Imgs/Tonic3.png'
import Drenaje1 from '../Imgs/Drenaje1.jpg'
import Drenaje2 from '../Imgs/Drenaje2.png'
import Drenaje3 from '../Imgs/Drenaje3.png'

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
        case "REMOVE_ONE_PRODUCT":
            console.log(action.payload)
            return{
                ...state,
                priceTotal: state.priceTotal - action.payload.price,
                ...state.amount.splice((state.amount.indexOf(action.payload.idCard)), 1) // [1,1,1,2,2,3,3,3]
            }
            
        
        case "ADD_ONE_PRODUCT":
            return{
                ...state,
                priceTotal: state.priceTotal + action.payload.price,
                amount:[ ...state.amount, action.payload.idCard ]
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
                    img1: QuarzoRosa1,
                    img2: QuarzoRosa3,
                    img3: QuarzoRosa2
                }
            },

            {   
                id: 2,
                name: 'Hydrafacial Basic',
                subname: 'Piel Mixta - Grasa',
                descp: "Hydrafacial Es el más reciente avance en rejuvenecimiento de la piel. Es un procedimiento único que combina limpieza, exfoliación, extracción, hidratación y protección antioxidante.",
                price: 140000,
                img:{
                    img1: Hydrafacial1,
                    img2: Hydrafacial2,
                    img3: Hydrafacial3
                }
            },

            {   
                id: 3,
                name: 'Hydrafacial Tonic',
                descp: "Combina en una misma sesión limpieza, extracción de impurezas, peeling, e infiltración de sueros para obtener una piel de aspecto fresco, saludable, radiante y brillante.",
                price: 180000,
                img:{
                    img1: Tonic1,
                    img2: Tonic2,
                    img3: Tonic3
                }
            },

            {   
                id: 4,
                name: 'Drenaje Linfático',
                subname: 'Piernas cansadas',
                descp: "Con este servicio, estarías combatiendo lesiones musculares, hinchazón, retención de líquido intersticial, y celulitis entre muchas otras cosas más. ",
                price: 70000,
                img:{
                    img1: Drenaje1,
                    img2: Drenaje2,
                    img3: Drenaje3
                }
            },

            {   
                id: 5,
                name: 'Escleroterapia',
                subname: 'Complemento',
                descp: "Este servicio se ofrece por aparte, o en un paquete junto con nuestro Drenaje Linfático. ¡Mejora tu calidad de vida!",
                price: 50000,
                img:{
                    img1: Amatista1,
                    img2: Amatista2,
                    img3: Amatista3
                }
            },

            {   
                id: 6,
                name: 'Limpieza Profunda',
                subname: 'Cuarzo Amatista',
                descp: "Experimenta el poder del cuarzo amatista para lograr una limpieza más profunda, extrayendo impurezas y regulando el flujo de oxígeno por tu piel.",
                price: 150000,
                img:{
                    img1: Amatista1,
                    img2: Amatista2,
                    img3: Amatista3
                }
            },

            {   
                id: 7,
                name: 'Limpieza Facial',
                subname: 'Cuarzo Cristal',
                descp: "Peeling ultrasónico, Nutrición facial, Masaje facial + vibración cuarzo cristal, mascarilla de alta hidratación.",
                price: 130000,
                img:{
                    img1: Cristal3,
                    img2: Cristal2,
                    img3: Cristal1
                }
            },

            {   
                id: 8,
                name: 'Radiofreciencia',
                descp: "Estimula el tejido conectivo para lograr una piel revitalizada y radiante. Esta técnica favorece la regeneración celular y estimula la producción natural de colágeno y elastina.",
                price: 150000,
                img:{
                    img1: Amatista1,
                    img2: Amatista2,
                    img3: Amatista3
                }
            },

            {   
                id: 9,
                name: 'Ultrasonido',
                descp: "Los ultrasonidos se utilizan como tratamiento facial para estimular la producción de colágeno y tensar la piel eliminando la flacidez.",
                price: 150000,
                img:{
                    img1: Amatista1,
                    img2: Amatista2,
                    img3: Amatista3
                }
            },

            {   
                id: 10,
                name: 'Microdermabrasion',
                descp: "Una de las técnicas más revolucionarias para mantener la piel suave, limpia y joven. Elimina las cicatrices y las manchas de la edad.",
                price: 150000,
                img:{
                    img1: Amatista1,
                    img2: Amatista2,
                    img3: Amatista3
                }
            }

        ],
        cart: [],
        priceTotal: 0,
        amount:[],
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
