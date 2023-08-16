import { Box, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainContent() {
    return (
        <Box px={1} pb={{ xs: 10, md: 0 }} flexGrow={1} mt={1}>
            <Outlet />
        </Box>
    )
}
