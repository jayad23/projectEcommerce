import React, { useContext } from 'react'
import ProductsContext from '../../Context/ProductsContext'
import RenderCard from '../../Components/RenderCard/RenderCard'

import "./Products.styles.css"

const Products = () => {

    const { dataOne } = useContext(ProductsContext)
    
    return (
        <div className="main-container contenedor-prodcuts">
        {
            dataOne?.products?.map(product =>
                <RenderCard
                    key={product.id}
                    idCard={product.id}
                    name={product.name}
                    imgs={product.img}
                    description={product.descp}
                    price={product.price}
                />
            )
        }
    </div>
    )
}

export default Products
