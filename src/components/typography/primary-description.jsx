import { Typography } from '@mui/material'
import React from 'react'

const PrimaryDescription = ({ description, icon, sxProps, onClick = undefined }) => {
    return (
        <Typography variant='h5' component="h5" sx={{
            ...sxProps,
            "@media(max-width:769px)": {
                fontSize: '0.75rem',
                fontWeight: 500,
                lineHeight: "1.25rem"
            }
        }} onClick={onClick}>
            {icon}{description}
        </Typography>
    )
}

export default PrimaryDescription