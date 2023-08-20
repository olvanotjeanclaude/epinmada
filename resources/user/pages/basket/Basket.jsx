import { Box, Card, CardContent, IconButton, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { grey } from '@mui/material/colors'
import Counter from './Counter';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteCartMutation } from '../Product/useProduct';

const CardContentNoPadding = styled(CardContent)(`
&:last-child {
  padding-bottom: 0;
}
`);

export default function Basket({ basket }) {
  const deleteCartMutation = useDeleteCartMutation();
  const product = basket.product;

  const deleteCart = () => deleteCartMutation.mutate(product.unique_id);

  return (
    <Card sx={{ border: `1px solid ${grey[300]}`, pb: 1.5 }} elevation={0}>
      <CardContentNoPadding>
        <Box>
          <Box display="flex" gap={2}>
            <img width={83} height={83} src={product.image_url} />
            <Stack flexGrow={1}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant='body2' color={grey[700]}>{product.category.name}</Typography>
              <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
                <Counter basket={basket} />
                <IconButton onClick={deleteCart} size='small' aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <Typography variant="h5">{basket.formatted_sub_amount}</Typography>
              </Box>
            </Stack>
          </Box>

        </Box>
        {/* <Grid container>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2}>
              <img width={50} height={50} src={product.image_url} />
              <Box>
                <Box>
                  <Box display="flex" alignItems="center" direction="row" justifyContent="space-between">
                    <Typography variant="h6">{product.name}</Typography>
                  </Box>
                </Box>
                <Typography variant='body2' color={grey[700]}>{product.category.name}</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} display="flex" justifyContent="space-between" alignItems="center">
            <Counter basket={basket} />
            <Stack>
              <IconButton   aria-label="delete">
                <DeleteIcon  />
              </IconButton>
              <Typography textAlign="center" variant="h5">{basket.formatted_sub_amount}</Typography>
            </Stack>
          </Grid>

        </Grid> */}
      </CardContentNoPadding>
    </Card>
  )
}
