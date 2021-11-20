import React, {useState} from 'react'
import '../Styles/RenderCard.css'

const RenderCard = ({img1, img2, img3}) => {

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
            setImageThree(!imageThree)
            setImageTwo(false)

        }
    }

    return (
        <>
            <div className="container-slider">
                <div className='slides'>
                    <div className={imageOne ? "slide" : "slide one"}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={imageTwo ? "slide" : "slide two"}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={imageThree ? "slide" : "slide three"}>
                        <img src={img3} alt="" />
                    </div>
                    <div className='navigation-container'>
                        <button onClick={()=> handlerSlider (1, imageOne)}></button>
                        <button onClick={()=> handlerSlider (2, imageTwo)}></button>
                        <button onClick={()=> handlerSlider (3, imageThree)}></button>
                    </div>
                </div>
                <div className='container-text'>
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, suscipit? Quibusdam, earum! Et unde minima, ducimus sequi ipsam optio beatae.</p>
                    <h4>Price</h4>
                    <button>Add</button>
                </div>
            </div>
            
            <div className="container-slider">
                <div className='slides'>
                    <div className={imageOne ? "slide" : "slide one"}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={imageTwo ? "slide" : "slide two"}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={imageThree ? "slide" : "slide three"}>
                        <img src={img3} alt="" />
                    </div>
                    <div className='navigation-container'>
                        <button onClick={()=> handlerSlider (1, imageOne)}></button>
                        <button onClick={()=> handlerSlider (2, imageTwo)}></button>
                        <button onClick={()=> handlerSlider (3, imageThree)}></button>
                    </div>
                </div>
                <div className='container-text'>
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, suscipit? Quibusdam, earum! Et unde minima, ducimus sequi ipsam optio beatae.</p>
                    <h4>Price</h4>
                    <button>Add</button>
                </div>
            </div>
            
            <div className="container-slider">
                <div className='slides'>
                    <div className={imageOne ? "slide" : "slide one"}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={imageTwo ? "slide" : "slide two"}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={imageThree ? "slide" : "slide three"}>
                        <img src={img3} alt="" />
                    </div>
                    <div className='navigation-container'>
                        <button onClick={()=> handlerSlider (1, imageOne)}></button>
                        <button onClick={()=> handlerSlider (2, imageTwo)}></button>
                        <button onClick={()=> handlerSlider (3, imageThree)}></button>
                    </div>
                </div>
                <div className='container-text'>
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, suscipit? Quibusdam, earum! Et unde minima, ducimus sequi ipsam optio beatae.</p>
                    <h4>Price</h4>
                    <button>Add</button>
                </div>
            </div>
            
            <div className="container-slider">
                <div className='slides'>
                    <div className={imageOne ? "slide" : "slide one"}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={imageTwo ? "slide" : "slide two"}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={imageThree ? "slide" : "slide three"}>
                        <img src={img3} alt="" />
                    </div>
                    <div className='navigation-container'>
                        <button onClick={()=> handlerSlider (1, imageOne)}></button>
                        <button onClick={()=> handlerSlider (2, imageTwo)}></button>
                        <button onClick={()=> handlerSlider (3, imageThree)}></button>
                    </div>
                </div>
                <div className='container-text'>
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, suscipit? Quibusdam, earum! Et unde minima, ducimus sequi ipsam optio beatae.</p>
                    <h4>Price</h4>
                    <button>Add</button>
                </div>
            </div>
            
            <div className="container-slider">
                <div className='slides'>
                    <div className={imageOne ? "slide" : "slide one"}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={imageTwo ? "slide" : "slide two"}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={imageThree ? "slide" : "slide three"}>
                        <img src={img3} alt="" />
                    </div>
                    <div className='navigation-container'>
                        <button onClick={()=> handlerSlider (1, imageOne)}></button>
                        <button onClick={()=> handlerSlider (2, imageTwo)}></button>
                        <button onClick={()=> handlerSlider (3, imageThree)}></button>
                    </div>
                </div>
                <div className='container-text'>
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, suscipit? Quibusdam, earum! Et unde minima, ducimus sequi ipsam optio beatae.</p>
                    <h4>Price</h4>
                    <button>Add</button>
                </div>
            </div>
            
            <div className="container-slider">
                <div className='slides'>
                    <div className={imageOne ? "slide" : "slide one"}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={imageTwo ? "slide" : "slide two"}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={imageThree ? "slide" : "slide three"}>
                        <img src={img3} alt="" />
                    </div>
                    <div className='navigation-container'>
                        <button onClick={()=> handlerSlider (1, imageOne)}></button>
                        <button onClick={()=> handlerSlider (2, imageTwo)}></button>
                        <button onClick={()=> handlerSlider (3, imageThree)}></button>
                    </div>
                </div>
                <div className='container-text'>
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, suscipit? Quibusdam, earum! Et unde minima, ducimus sequi ipsam optio beatae.</p>
                    <h4>Price</h4>
                    <button>Add</button>
                </div>
            </div>
        </>
    )
}

export default RenderCard