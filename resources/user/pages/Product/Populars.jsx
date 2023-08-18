import React from 'react'
import PageTitle from '../../component/PageTitle'
import { Box, Chip, CircularProgress, Grid, Stack } from '@mui/material'
import { useFetchProduct } from './useProduct';
import Popular from './Popular';
import Error from '../error/Error';

export default function Populars() {
  const { data, isLoading, tag, setTag, isError, error } = useFetchProduct();

  if (isError) return <Error error={error} />

  if (isLoading) return <CircularProgress />;

  const handleCategory = (product) => {
    setTag(product.name);
  }

  return (
    <>
      <PageTitle title="Populaire Produits" />

      <Box>
        <Stack direction="row" gap={1} mb={1}>
          {
            data.categories.map((category) => (
              <Chip label={category.name}
                color={category.name == tag ? "primary" : "default"}
                key={category.id} variant="contained"
                onClick={() => handleCategory(category)} />
            ))
          }
          <Chip variant="contained"
            label="Tout"
            color={ tag=="all" ? "primary" : "default"}
            onClick={() => handleCategory({ name: "all" })} />
        </Stack>

        <Grid container spacing={1}>
          {
            data.products.data.map((product, index) => (
              <Grid sx={{ width: "100%" }} item md={6} lg={4} key={index}>
                <Popular product={product} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}
