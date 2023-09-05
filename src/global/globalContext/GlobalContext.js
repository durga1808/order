import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("");

    return (
        <GlobalContext.Provider
            value={{ isCollapsed, setIsCollapsed, selected, setSelected }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider };