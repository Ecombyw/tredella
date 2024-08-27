import { Typography } from '@mui/material'
import React from 'react'

const SecondaryDescription = ({ description, icon, sxProps, onClick = undefined }) => {
    return (
        <Typography variant='h6' component="h6" sx={{
            ...sxProps,
        }} onClick={onClick}>
            {icon}{description}
        </Typography>
    )
}

export default SecondaryDescription