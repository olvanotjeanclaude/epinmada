import { Box, CircularProgress, Container, CssBaseline } from '@mui/material'
import Topbar from '../component/navigation/Topbar'
import Sidebar from '../component/navigation/Sidebar'
import MainContent from './MainContent'
import { grey, red } from '@mui/material/colors'
import FixedBottomBar from '../component/navigation/FixedBottomBar'
import useAuth from '../../common/hook/useAuth'

export default function MainLayout() {
    const { user, userLoading, userError } = useAuth();

    if (userLoading) return <CircularProgress />;

    if (userError) return window.location.replace("sign-in")

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
