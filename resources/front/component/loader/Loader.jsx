import { Box, LinearProgress, Typography } from "@mui/material"

const Loader = () => (
    <Box sx={{ width: '100%' }}>
        <Typography variant="body2" color="initial">Chargement...</Typography>
        {/* <LinearProgress /> */}
    </Box>
);
export default Loader;