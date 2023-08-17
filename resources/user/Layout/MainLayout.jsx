import { Box, Container, CssBaseline } from '@mui/material'
import React, { useEffect } from 'react'
import Topbar from '../component/navigation/Topbar'
import Sidebar from '../component/navigation/Sidebar'
import MainContent from './MainContent'
import { grey, red } from '@mui/material/colors'
import FixedBottomBar from '../component/navigation/FixedBottomBar'
import { useLocation } from 'react-router-dom'

export default function MainLayout() {
    const location = useLocation();

    useEffect(() => {
        // console.log(location)
    }, [location])

    return (
        <Box position="relative" bgcolor={grey[50]}>
            <CssBaseline />
            <Topbar />
            <Box pt={2}>
                <Container maxWidth="lg">
                    <Box display="flex" minHeight="90vh">
                        <Sidebar />
                        <MainContent />
                    </Box>
                </Container>
            </Box>
            <FixedBottomBar />
        </Box>
    )
}
