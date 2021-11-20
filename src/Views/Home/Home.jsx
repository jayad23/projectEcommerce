import React, { useContext } from 'react'
import ProductsContext from '../../Context/ProductsContext'
import RenderCard from '../../Components/RenderCard/RenderCard'



const Home = () => {

    const { dataOne } = useContext(ProductsContext)

    return (
        <div className="main-container">
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

export default Home
