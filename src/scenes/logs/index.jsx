import { Box } from '@mui/material'
import React from 'react'
import Loglists from './Loglists'

const Logs = () => {

    return (
        <div style={{ overflowY: "auto", height: "calc(79% - 10px)" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "normal", margin: "20px" }}>
                <Loglists />
            </Box>
        </div>
    )
}

export default Logs