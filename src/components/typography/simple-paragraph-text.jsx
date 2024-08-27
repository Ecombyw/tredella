import { Typography } from '@mui/material'
import React from 'react'

const SimpleParagraphText = ({ text, sxProps, }) => {
    return (
        <Typography variant='body1' component="p" sx={{
            ...sxProps,
            "@media(max-width:769px)": {
                fontSize: '0.875rem',
                fontWeight: 400,
                lineHeight: "1.75rem"
            }
        }} >
            {text}
        </Typography>
    )
}

export default SimpleParagraphText