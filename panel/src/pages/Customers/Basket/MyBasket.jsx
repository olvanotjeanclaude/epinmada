import { CardContent, Grid } from '@material-ui/core'
import { Card, Typography } from '@mui/material'
import React from 'react'

export default function MyBasket() {
  return (
   <>
    <Card>
      <CardContent>
         <Grid container>
          <Grid item xs={12}>
            <Typography variant='h3'>Şubat 2021</Typography>
          </Grid>
         </Grid>
      </CardContent>
    </Card>
   </>
  )
}
