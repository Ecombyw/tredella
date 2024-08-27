"use client"
import theme from '@/configs/theme/theme'
import { Box } from '@mui/material'
import React from 'react'

const LayoutProvider = ({ children, parentSxProps, childSxProps }) => {
    return (
        <>
            <Box sx={{
                width: "100%",
                // border: "1px solid red",
                backgroundColor: theme.palette.backgroundColor.white,
                px: 4,
                "@media(max-width:768px)": { px: 2 },
                ...parentSxProps
            }} >
                <Box sx={{
                    maxWidth: "1440px",
                    mx: "auto",
                    // border: "1px solid red",
                    ...childSxProps
                }}>
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default LayoutProvider