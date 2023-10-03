import { CircularProgress, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme';

const Loading = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", width: "100%", height: "80vh" }}>
            <CircularProgress style={{ color: colors.blueAccent[400] }} size={80} thickness={4} />
            <Typography variant="h5" fontWeight={"600"} mt={2}>
                LOADING.....
            </Typography>
        </div>
    )
}

export default Loading