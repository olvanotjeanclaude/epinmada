import { CircularProgress, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Basket from './Basket'
import Pay from './StepPay.jsx'
import PageTitle from '@/user/component/PageTitle'
import Error from '../error/Error'
import { useBasket } from '@/user/context/BasketContextProvider'

export default function Baskets() {
  const { data, isError, error, isLoading } = useBasket();

  if (isError) return <Error error={error} />

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <PageTitle title="Mon Panier" />

      <Grid container mb={2} spacing={1}>
        <Grid item xs={12} md={8} xl={9}>
          <Stack spacing={1}>
            {
              data.baskets.map((basket, index) => (
                <Basket basket={basket} key={basket.id} />
              ))

            }
            {data.baskets.length == 0 && <Typography variant="h4" color="warning">Aucune data</Typography>}
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} xl={3}>
          {data.baskets.length > 0 ? <Pay amount={data.sum_sub_amount} /> : <></>}
        </Grid>
      </Grid>
    </>
  )
}
