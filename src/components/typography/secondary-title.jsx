import { Typography } from '@mui/material'
import React from 'react'

const SecondaryTitle = ({ title, sxProps, onClick = undefined }) => {
    return (
        <>
            <Typography variant='h2' component="h2" sx={{
                ...sxProps,
                "@media(max-width:769px)": {
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    lineHeight: "2rem"
                }
            }} onClick={onClick}>
                {title}
            </Typography>
        </>
    )
}

export default SecondaryTitle