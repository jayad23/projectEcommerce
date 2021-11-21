import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Logo from "../../Assets/Logo.jpg"

const Carrousell = () => {

    const contentStyle = {

        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    return (

        <Carousel autoplay>
            <div>
                 <img src={Logo} alt="" />
            </div>
            <div>
               <h3>Funciona </h3>
            </div>
            <div>
             <img src={Logo} alt="" />
            </div>
            <div>
             <img src={Logo} alt="" />
            </div>
        </Carousel>

    )
}

export default Carrousell
