import React, {createContext} from 'react'

const StoreContext = createContext()

const StoreContextProvider = ({children}) => {


    return (
       <StoreContext.Provider>
           {children}
       </StoreContext.Provider>
    )
}

export {StoreContextProvider}
export default StoreContext
