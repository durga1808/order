import React, { createContext, useState } from "react";
import { options } from "../MockData/MockTraces";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState(localStorage.getItem("routeName"));
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedTrace, setSelectedTrace] = useState({});
    const [selectedSpan, setSelectedSpan] = useState({ attributes: [] });
    const [traceData, setTraceData] = useState([]);

    const defaultValue = 60;
    const defaultLabel = options.find((option) => option.value === defaultValue);
    const [lookBackVal, setLookBackVal] = useState(defaultLabel);
    const [needFilterCall, setNeedFilterCall] = useState(false);
    const [filterApiBody, setFilterApiBody] = useState({});
    const [traceGlobalEmpty, setTraceGlobalEmpty] = useState(null);
    const [traceGlobalError, setTraceGlobalError] = useState(null);
    const [traceLoading, setTraceLoading] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                isCollapsed,
                setIsCollapsed,
                selected,
                setSelected,
                selectedOptions,
                setSelectedOptions,
                selectedTrace,
                setSelectedTrace,
                selectedSpan,
                setSelectedSpan,
                traceData,
                setTraceData,
                lookBackVal,
                setLookBackVal,
                needFilterCall,
                setNeedFilterCall,
                filterApiBody,
                setFilterApiBody,
                traceGlobalEmpty,
                setTraceGlobalEmpty,
                traceGlobalError,
                setTraceGlobalError,
                traceLoading,
                setTraceLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
