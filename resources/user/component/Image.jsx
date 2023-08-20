import { Box } from '@mui/material'
import React from 'react'

export default function Image({ src,width=50,height=60,...props }) {
    return (
        <Box
            component="img"
            sx={{
                width,
                height,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                ...props
            }}
            alt="The house from the offer."
            src={src}
        />
    )
}
