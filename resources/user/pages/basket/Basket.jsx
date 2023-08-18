import { Avatar, Box, Card, CardContent, Grid, IconButton, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { grey } from '@mui/material/colors'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const CardContentNoPadding = styled(CardContent)(`
&:last-child {
  padding-bottom: 0;
}
`);

export default function Basket({ basket }) {
  const product = basket.product;

  return (
    <Card sx={{ border: `1px solid ${grey[300]}`, pb: 1.5 }} elevation={0}>
      <CardContentNoPadding>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2}>
              <img width={50} height={50} src={product.image_url} />
              <Box>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant='body2' color={grey[700]}>{product.category.name}</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} display="flex" justifyContent="space-between" alignItems="center">
            <Stack direction="row"   alignItems="center" justifyContent="center" borderRadius={10}>
              <IconButton color='primary' size='small'>
                <AddCircleIcon />
              </IconButton>
              <Typography variant="h6" color="primary">1</Typography>
              <IconButton color='primary' size='small'>
                <RemoveCircleIcon />
              </IconButton>
            </Stack>
            <Typography textAlign="center" variant="h5">{basket.formatted_sub_amount}</Typography>
          </Grid>

        </Grid>
      </CardContentNoPadding>
    </Card>
  )
}
