"use client"

import { createContext, useContext, useState } from "react"

const GlobalContext = createContext({
    hamburgerMenu: false
})

export const GlobalContextProvider = ({ children }) => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    
    return <GlobalContext.Provider value={{ hamburgerMenu, setHamburgerMenu}}>{children}</GlobalContext.Provider>
}

export const useGlolContext = () => useContext(GlobalContext)