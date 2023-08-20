import { Grid } from '@mui/material'
import React from 'react'
import PageTitle from '@/user/component/PageTitle'
import Product from './Order'

export default function Orders() {
  return (
    <>
      <PageTitle title="Mes Commandes" />
      <Grid container spacing={1} mb={2}>
        {
          Array.from({ length: 5 }).map((_, index) => (
            <Grid item md={6} key={index} sx={{  width: "100%" }}>
              <Product  />
            </Grid>
          ))
        }
      </Grid>

    </>
  )
}
