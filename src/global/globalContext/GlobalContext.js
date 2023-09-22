import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState(localStorage.getItem("routeName"));
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedTrace, setSelectedTrace] = useState({});
    const [selectedSpan, setSelectedSpan] = useState({ "attributes": [] });

    return (
        <GlobalContext.Provider
            value={{ isCollapsed, setIsCollapsed, selected, setSelected, selectedOptions, setSelectedOptions, selectedTrace, setSelectedTrace, selectedSpan, setSelectedSpan }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider };