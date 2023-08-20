import React from 'react';
import { Avatar, Card, CardContent, CircularProgress, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import Error from '../error/Error';

export default function OrderSummary({basketData}) {
    const { data, isLoading, isError, error } =basketData;

    if (isError) return <Error error={error} />

    if (isLoading) return <CircularProgress />;

    return (
        <Card>
            <CardContent sx={{ p: 0 }}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {
                        data.baskets.map((basket) => (
                            <ListItem key={basket.id}>
                                <ListItemAvatar>
                                    <Avatar src={basket.product.image_url} />
                                </ListItemAvatar>
                                <ListItemText primary={basket.product.name}
                                    secondary={basket.formatted_sub_amount} />
                            </ListItem>
                        ))
                    }
                </List>
            </CardContent>
        </Card>
    )
}
