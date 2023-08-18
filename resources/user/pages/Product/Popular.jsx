import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import path from '../../menus/path';

export default function Popular({ product }) {
    return (
        <Card>
            <CardContent>
                <Box gap={1} display="flex" justifyContent={{ md: "center" }}>
                    <Box
                        component="img"
                        // height:"140"
                        width={110}
                        height={110}
                        alt={product.name}
                        src={product.image_url}
                    />
                    <Stack flexGrow={1}>
                        <Stack>
                            <Typography variant="h6" noWrap>{product.name}</Typography>
                            <Typography variant="body2" color={grey[700]}>{product.category.name}</Typography>
                        </Stack>

                        <Typography variant='h5' fontWeight="bold" mt={1}>
                            {product.formatted_price}
                        </Typography>

                        <Link to={path.payment} style={{ textDecoration: "none" }}>
                            <Button  sx={{ mt: 1 }}
                                variant='contained'
                                startIcon={<AddShoppingCartIcon />}>
                                Ajouter
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    )
}
