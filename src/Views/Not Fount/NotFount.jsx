import React from 'react'

//Img Error 404
import Error from "../../Assets/undraw_page_not_found_re_e9o6.svg"

const NotFount = () => {
    return (
        <div className="flex w-screen justify-center items-center">
            <img src={Error} className="h-80 w-80"/>
        </div>
    )
}

export default NotFount
