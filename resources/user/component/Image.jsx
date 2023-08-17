import { Box } from '@mui/material'
import React from 'react'

export default function Image({ src }) {
    return (
        <Box
            component="img"
            sx={{
                height: 60,
                width: 50,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={src}
        />
    )
}
