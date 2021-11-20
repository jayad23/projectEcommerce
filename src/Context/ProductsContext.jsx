import React, {createContext} from 'react'
import img1 from '../Imgs/img1.jpg'
import img2 from '../Imgs/img2.jpg'
import img3 from '../Imgs/img3.jpg'

const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const dataOne = {
        products: [
            {   
                id: 1,
                name: 'Product 1',
                descp: 'Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso',
                price: 150,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 2,
                name: 'Product 1',
                descp: 'Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso',
                price: 150,
                img:{
                    img1,
                    img2,
                    img3
                }
            },

            {   
                id: 3,
                name: 'Product 1',
                descp: 'Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso',
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
                descp: 'Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso',
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
                descp: 'Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso',
                price: 150,
                img:{
                    img1,
                    img2,
                    img3
                }
            }

        ]
    }

    const data = {
        dataOne
    }

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContextProvider }
export default ProductsContext
