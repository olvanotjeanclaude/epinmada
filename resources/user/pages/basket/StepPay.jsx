import React from 'react';
import { Box, Button, Card, CardContent, LinearProgress, Stack, Typography } from '@mui/material'
import PaymentIcon from '@mui/icons-material/Payment';
import { Link, useLocation } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import path from '@/user/menus/path';
import { LoadingButton } from '@mui/lab';

export default function StepPay({ loading, isValid, amount, label = "continuer à payer" }) {
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
                            <LoadingButton loading={loading}
                                type="submit" startIcon={<PaymentIcon />} variant='contained'>
                                {label}
                            </LoadingButton>
                            {loading ? <Typography mt={2}>
                                Traitement du paiement en cours... Veuillez ne pas actualiser votre page pendant le traitement du paiement. Merci pour votre patience.
                                <LinearProgress />
                            </Typography> : <></>}
                        </Box>
                    }
                </Stack>
            </CardContent>
        </Card>
    )
}
