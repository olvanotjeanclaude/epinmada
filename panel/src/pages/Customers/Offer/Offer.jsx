import { CardContent, CardHeader, Grid } from '@material-ui/core'
import { Button, Card, CardActionArea, CardActions, CardMedia, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import { Wrapper } from '../../../components'

export default function Offer() {
  return (
    <Wrapper>
      <CardHeader title="Mon Offres Speciales Pour Vous" />
      <Grid container>
        <Grid item  sm={4} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="160"
              image="https://productimages.hepsiburada.net/s/179/444-444/110000143335632.jpg/format:webp"
              alt="Paella dish"
            />
            <CardActionArea>
              <CardContent>
                <Typography my={1}>lorem lorem Lorem ipsum dolor e minima reiciendis vitae.</Typography>
                <Typography variant='h6' fontWeight="500">2 000 Ar</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button sx={{ width: "100%" }} variant='contained' startIcon={<ShoppingCartIcon />}>
                Ajouter Au Panier
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
