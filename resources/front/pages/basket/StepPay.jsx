import React from 'react';
import { Button, Card, CardContent, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from 'react-router-dom';
import path from '../../menus/path';
import { grey } from '@mui/material/colors';

export default function Pay() {
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down("md"));
    const bottomNavHeight = document.getElementsByClassName("MuiBottomNavigation-root")[0].clientHeight;

    const sx = isXsScreen ? {
        position: "sticky",
        top: 40,
        px: 1,
        left: 0, right: 0,
        width: "100%",
    } : {};

    return (
        <Card sx={{ bgcolor: grey[50] }}>
            <CardContent>
                <Stack gap={2}>
                    <Typography variant='h4' color="primary">TOTAL A PAYER</Typography>
                    <Typography variant='h4' fontWeight={500}>
                        100 000 Ar
                    </Typography>
                    <Link to={path.payment}>
                        <Button startIcon={<PaymentIcon />} sx={{ width: "100%" }} variant='contained'>
                            Continuer
                        </Button>
                    </Link>
                </Stack>
            </CardContent>
        </Card>
    )
}
