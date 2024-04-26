import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const searchProductContext = createContext()

function ContextAPI({children}) {

    const [addResponse,setAddResponse] = useState("")
    const [searchProduct,setSearchProduct] = useState("")
  return (
    <>
    <addResponseContext.Provider value={{addResponse,setAddResponse}}>
      <searchProductContext.Provider value={{searchProduct,setSearchProduct}}>
        {children}
      </searchProductContext.Provider>
    </addResponseContext.Provider>
    </>
  )
}

export default ContextAPI