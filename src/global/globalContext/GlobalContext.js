import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState(localStorage.getItem("routeName"));
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <GlobalContext.Provider
            value={{ isCollapsed, setIsCollapsed, selected, setSelected, selectedOptions, setSelectedOptions }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider };