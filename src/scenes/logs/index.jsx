import { Box } from '@mui/material'
import React from 'react'
import Loglists from './Loglists'

const Logs = () => {
    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "normal", margin: "20px" }}>
                <Loglists />
            </Box>
        </div>
    )
}

export default Logs