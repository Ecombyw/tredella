import { Typography } from '@mui/material'
import React from 'react'

const PrimaryHeading = ({ heading, icon, sxProps, onClick = undefined }) => {
    return (
        <>
            <Typography variant='h3' component="h3" sx={{
                ...sxProps,
                "@media(max-width:769px)": {
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    lineHeight: "1.75rem"
                }
            }} onClick={onClick}>
                {icon}{heading}
            </Typography>
        </>
    )
}

export default PrimaryHeading