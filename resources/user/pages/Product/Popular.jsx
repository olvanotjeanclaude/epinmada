import React, { useState } from 'react'
import { Alert, Box, Card, CardContent, Snackbar, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import { useAddToCartMutation } from './useProduct';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoadingButton from '@mui/lab/LoadingButton';

export default function Popular({ product }) {
    const addToCartMutation = useAddToCartMutation();
    const [openSnackbar, setSnackbar] = useState(false);

    const closeSnackbar = () => {
        setSnackbar(false);
    }

    const addToCart = () => {
        addToCartMutation.mutate(product.unique_id, {
            onSuccess(data) {
                setSnackbar(true);
            }
        });
    };


    return (
        <>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={closeSnackbar}>
                <Alert onClose={closeSnackbar} variant='filled' severity="success">
                    {product.name} a été  ajouté au panier avec succès
                </Alert>
            </Snackbar>

            <Card>
                <CardContent>
                    <Box gap={1} display="flex" justifyContent={{ md: "center" }}>
                        <Box
                            component="img"
                            // height:"140"
                            width={110}
                            sx={{objectFit:"cover"}}
                            height={110}
                            alt={product.name}
                            src={product.image_url}
                        />
                        <Box flexGrow={1}>
                            <Stack>
                                <Typography variant="h6" noWrap>{product.name}</Typography>
                                <Typography variant="body2" color={grey[700]}>{product.category.name}</Typography>
                            </Stack>

                            <Typography variant='h5' fontWeight="bold" mt={1}>
                                {product.formatted_price}
                            </Typography>

                            <LoadingButton sx={{ mt: 1 }}
                                loading={addToCartMutation.isLoading}
                                disabled={addToCartMutation.isLoading}
                                onClick={addToCart}
                                variant='contained'
                                size='small'
                                startIcon={<AddShoppingCartIcon />}>
                                Ajouter
                            </LoadingButton>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}
