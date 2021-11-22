import React, {useState, useContext} from 'react'
import "./RenderCard.styles.css"

import ProductsContext from '../../Context/ProductsContext'

const RenderCard = ({ idCard, name, imgs, description, price, subname }) => {
    const [seeMore, setSeeMore] = useState(70)
    const handlerDescription = ()=>{
        if(seeMore === 70){
            setSeeMore(description.length)
        }else if(seeMore === description.length){
            setSeeMore(70)
        }
    }
    const { dispatch } = useContext(ProductsContext)
    
    const {img1, img2, img3} = imgs

    const [imageOne, setImageOne] = useState(true)
    const [imageTwo, setImageTwo] = useState(false)
    const [imageThree, setImageThree] = useState(false)

    const handlerSlider = (num, param)=>{
        if(num === 1 && param === false){
            setImageOne(true)
            setImageThree(false)
            setImageTwo(false)
        } else if (num === 2 && param === false){
            setImageOne(false)
            setImageTwo(!imageTwo)
            setImageThree(false)
        }else if (num === 3 && param === false){
            setImageOne(false)
            setImageThree(!imageThree)
            setImageTwo(false)
        }    
            
    }

    return (
        <div className="container-slider">
            <div className='slides' id={idCard}>
                <div className={imageOne ? "slide" : "slide one"}>
                    <img src={img1} alt="image1" />
                </div>
                <div className={imageTwo ? "slide" : "slide two"}>
                    <img src={img2} alt="image2" />
                </div>
                <div className={imageThree ? "slide" : "slide three"}>
                    <img src={img3} alt="image2" />
                </div>
                <div className='navigation-container'>
                    <button onClick={()=> handlerSlider (1, imageOne)}></button>
                    <button onClick={()=> handlerSlider (2, imageTwo)}></button>
                    <button onClick={()=> handlerSlider (3, imageThree)}></button>
                </div>
            </div>
            <div className='container-text'>
                <h3>{seeMore === 70 ? name : ''}</h3>
                <h6>{seeMore === 70 ? subname : ''}</h6>
                <p>{description.slice(0, seeMore)}</p>
                <p onClick={handlerDescription} className="seemore">{seeMore === 70 ? 'Ver más' : 'Ver Menos'}</p>
                <h3 className="price">{`$ ${price}`}</h3>
                <button onClick={()=> dispatch({type:"ADD_TO_CART", payload: { idCard, name, imgs, description, price } })} className=" py-1 px-4 rounded-2xl text-black" >Add to Cart</button>
            </div>
        </div>
    )
}

export default RenderCard