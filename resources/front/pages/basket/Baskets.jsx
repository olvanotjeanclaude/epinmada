import { Box, Grid } from '@mui/material'
import React from 'react'
import Basket from './Basket'
import Pay from './StepPay.jsx'
import PageTitle from '../../component/PageTitle'

export default function Baskets() {
  return (
    <>
      <PageTitle title="Mon Panier" />

      <Grid container mb={2} spacing={1}>
        <Grid item xs={12} md={8} xl={9}>
          <Box display="flex" flexDirection="column" gap={1}>
            {
              Array.from({ length: 5 }).map((basket, index) => (
                <Basket basket={basket} key={index} />
              ))
            }
          </Box>
        </Grid>
        <Grid item xs={12} md={4} xl={3}>
          <Pay />
        </Grid>
      </Grid>
    </>
  )
}
