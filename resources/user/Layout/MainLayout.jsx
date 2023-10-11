import { Box, CircularProgress, Container, CssBaseline } from '@mui/material'
import Topbar from '../component/navigation/Topbar'
import Sidebar from '../component/navigation/Sidebar'
import MainContent from './MainContent'
import { grey, red } from '@mui/material/colors'
import useAuth from '@/common/hook/useAuth'
import FixedBottomBar from '@/user/component/navigation/FixedBottomBar'

export default function MainLayout() {
    const { user, userLoading, userError } = useAuth();

    // if (userLoading) return <CircularProgress />;

    if (userError || (user && user.type != 3)) return window.location.href ="/"

    return user ? (
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
    ) : <></>
}
