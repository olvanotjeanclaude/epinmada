import React from 'react';
import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material'
import PaymentIcon from '@mui/icons-material/Payment';
import { Link, useLocation } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import path from '@/user/menus/path';

export default function StepPay({ amount, label = "continuer à payer" }) {
    const location = useLocation();
    return (
        <Card sx={{ bgcolor: grey[50] }}>
            <CardContent>
                <Stack gap={2}>
                    <Typography variant='h4' color="primary">TOTAL A PAYER</Typography>
                    <Typography variant='h4' fontWeight={500}>
                        {amount}
                    </Typography>
                    {location.pathname == path.basket ?
                        <Link to={path.payment}>
                            <Button startIcon={<PaymentIcon />} variant='contained'>
                                {label}
                            </Button>
                        </Link> :
                        <Box>
                            <Button type="submit" startIcon={<PaymentIcon />} variant='contained'>
                                {label}
                            </Button>
                        </Box>
                    }
                </Stack>
            </CardContent>
        </Card>
    )
}
