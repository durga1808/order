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

    const defaultValue = 120;
    const defaultLabel = options.find((option) => option.value === defaultValue);
    const [lookBackVal, setLookBackVal] = useState(defaultLabel);
    const [needFilterCall, setNeedFilterCall] = useState(false);
    const [filterApiBody, setFilterApiBody] = useState({});
    const [traceGlobalEmpty, setTraceGlobalEmpty] = useState(null);
    const [traceGlobalError, setTraceGlobalError] = useState(null);
    const [traceLoading, setTraceLoading] = useState(false);
    const [recentTrace, setRecentTrace] = useState([]);
    const [traceToLogError, setTraceToLogError] = useState("");
    const [globalLogData, setGlobalLogData] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const [dashboardPage, setDashboardPage] = useState(1);
    const [dashboardPageCount, setDashboardPageCount] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    
    const [logFilterApiBody, setLogFilterApiBody] = useState({});
    const [needLogFilterCall, setNeedLogFilterCall] = useState(false);
    const [recentLogData, setRecentLogData] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");

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
                setTraceLoading,
                recentTrace,
                setRecentTrace,
                traceToLogError,
                setTraceToLogError,
                globalLogData,
                setGlobalLogData,
                serviceList,
                setServiceList,
                dashboardPage,
                setDashboardPage,
                dashboardPageCount,
                setDashboardPageCount,
                activeTab,
                setActiveTab,
                logFilterApiBody,
                setLogFilterApiBody,
                needLogFilterCall,
                setNeedLogFilterCall,
                recentLogData,
                setRecentLogData,
                searchQuery,
                setSearchQuery
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
