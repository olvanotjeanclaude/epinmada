import React from 'react';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from 'react-router-dom';
import path from '../../menus/path';
import { grey } from '@mui/material/colors';

export default function Pay({ amount }) {

    return (
        <Card sx={{ bgcolor: grey[50] }}>
            <CardContent>
                <Stack gap={2}>
                    <Typography variant='h4' color="primary">TOTAL A PAYER</Typography>
                    <Typography variant='h4' fontWeight={500}>
                        {amount}
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
