import React from 'react'

import "../MainLayOut/MainLayOut.styles.css"

//import
import Header from '../Header'

const MainLayOut = ({children}) => {
    return (
        <>
          <Header/>
          {children}
            <a
              href="https://wa.me/529672480062"
              class="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </>
    )
}

export default MainLayOut
