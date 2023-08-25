import OrderStatus from '@/common/component/OrderStatus';
import { camelToCapitalized, capitalizeLetter, formatDateTime } from '@/common/helper';
import { Box, Card, CardContent, Stack, Typography, TextField, Avatar, Chip, Grid } from '@mui/material'
import { deepPurple, green, grey } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Order({ order }) {
    const { product, sale } = order;

    return (
        <Card sx={{ border: `1px solid ${grey[300]}`, padding: 0, flexGrow: 1 }} elevation={0}>
            <CardContent>
                <Stack direction="row" mb={1} flexWrap="wrap" justifyContent="space-between">
                    <Link to={product.route_detail} target='_blank' style={{textDecoration:"none"}}>
                        <Typography variant="h5">{capitalizeLetter(product.name)}</Typography>
                    </Link>
                    <Typography variant="h5">{formatDateTime(order.created_at)}</Typography>
                </Stack>

                <Box display="flex" flexWrap="wrap" gap={2} justifyContent="space-between">
                    <Box display="flex" gap={1}>
                        <Avatar
                            alt="Remy Sharp"
                            src={product.image_url}
                            sx={{ width: 50, height: 50 }}
                        />
                        <Box>
                            <Typography variant="h6">No <b>{sale.unique_id}</b> </Typography>
                            <OrderStatus text={sale.statusText} status={sale.status} />
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection={{ xs: "row", xl: "column" }} gap={{ xs: 1, xl: 0 }} alignItems="end">
                        <Typography variant="h6" color="success">{order.formattedSubAmount}</Typography>
                        <Typography variant="subtitle2" color={green[500]}>{camelToCapitalized(sale.payment_mode)}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>


    )
}
