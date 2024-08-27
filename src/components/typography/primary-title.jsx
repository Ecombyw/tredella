import { Typography } from '@mui/material'
import React from 'react'

const PrimaryTitle = ({ title, sxProps, onClick = undefined }) => {
    return (
        <>
            <Typography variant='h1' component="h1" sx={{
                ...sxProps,
                "@media(max-width:769px)": {
                    fontSize: '1.875rem',
                    fontWeight: 700,
                    lineHeight: "2.25rem"
                }
            }} onClick={onClick}>
                {title}
            </Typography>
        </>
    )
}

export default PrimaryTitle