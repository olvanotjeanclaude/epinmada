import React from 'react';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import path from '@/user/menus/path';

export default function StepPay({ amount, label = "continuer à payer" }) {

    return (
        <Card sx={{ bgcolor: grey[50] }}>
            <CardContent>
                <Stack gap={2}>
                    <Typography variant='h4' color="primary">TOTAL A PAYER</Typography>
                    <Typography variant='h4' fontWeight={500}>
                        {amount}
                    </Typography>
                    <Link to={path.payment}>
                        <Button startIcon={<PaymentIcon />} variant='contained'>
                            {label}
                        </Button>
                    </Link>
                </Stack>
            </CardContent>
        </Card>
    )
}
