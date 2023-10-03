import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../global/globalContext/GlobalContext'

const Logs = () => {

    const { logData, traceToLogError } = useContext(GlobalContext);

    useEffect(() => {
        console.log("LogData " + logData + "  " + traceToLogError);
    }, [logData, traceToLogError])

    return (
        <div>Logs</div>
    )
}

export default Logs