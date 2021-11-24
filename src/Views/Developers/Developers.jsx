import React from 'react'
import "./Developers.styles.css"

import fotoperfiljorge from "../../Assets/fotoperfiljorge.jpg"
import joseph from "../../Imgs/joseph.jpg"
import uriel from "../../Assets/uriel.jpg"
import angel from "../../Assets/angel.jpg"
import emmanuel from "../../Assets/emmanuel.jpg"
import roberto from "../../Assets/roberto.jpg"
import jhon from "../../Assets/jhon.jpg"
import sergio from "../../Assets/sergio.jpg"


const Developers = () => {
    return (
       <div className="fondo">
            <div className="tarjeta tarjeta1">
                <img src="https://i.pinimg.com/564x/48/a8/c8/48a8c885550a3299b31d10fed20b110f.jpg" alt="" />
                <div className="titulos-tarjeta">
                    <h2>Jayder</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="https://twitter.com/KkVngz23" target="_blank"><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
            <div className="tarjeta tarjeta2">
                <img src={fotoperfiljorge} alt="" />
                <div className="titulos-tarjeta">
                    <h2>Jorge</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="#"><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
            <div className="tarjeta tarjeta1">
                <img src="https://hkgwtdvfyh.medianetwork.cloud/unsafe/600x600/filters:format(webp)/www.arweave.net/u2HsOVCP47Wr1FqBGdzbTNUtWAFBcx7nE6dcwU64C8Y/data.png" alt="" />
                <div className="titulos-tarjeta">
                    <h2>Fernando</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="https://twitter.com/Fernand20555402" target="_blank"><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
            <div className="tarjeta tarjeta2">
                <img src={joseph} alt="" />
                <div className="titulos-tarjeta">
                    <h2>Joseph</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="#" ><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
            <div className="tarjeta tarjeta1">
                <img src={angel} alt="" />
                <div className="titulos-tarjeta">
                    <h2>angel</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="#"><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
            <div className="tarjeta tarjeta2">
                <img src={jhon} alt="" />
                <div className="titulos-tarjeta">
                    <h2>jhon</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="#"><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
            <div className="tarjeta tarjeta1">
                <img src={emmanuel} alt="" />
                <div className="titulos-tarjeta">
                    <h2>emmanuel</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="#"><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
            <div className="tarjeta tarjeta2">
                <img src={roberto} alt="" />
                <div className="titulos-tarjeta">
                    <h2>roberto</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="#"><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
            <div className="tarjeta tarjeta1">
                <img src={uriel} alt="" />
                <div className="titulos-tarjeta">
                    <h2>uriel</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="#"><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
            <div className="tarjeta tarjeta2">
                <img src={sergio} alt="" />
                <div className="titulos-tarjeta">
                    <h2>uriel</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="#"><i className="fab fa-twitter twitter"></i></a>
                </div>
            </div>
       </div>
    )
}

export default Developers
