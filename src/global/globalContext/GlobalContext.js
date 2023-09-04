import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <GlobalContext.Provider
            value={{ isCollapsed, setIsCollapsed }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider };