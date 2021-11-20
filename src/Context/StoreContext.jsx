import React, {createContext} from 'react'

const StoreContext = createContext()

const StoreContextProvider = ({children}) => {



    

    const data = {

    }


    return (
       <StoreContext.Provider value={data}>
           {children}
       </StoreContext.Provider>
    )
}

export {StoreContextProvider}
export default StoreContext
