import React from 'react'
import { Wrapper } from '../../../components'
import { CardHeader, Grid } from '@material-ui/core'
import { Box, Button, Card, CardContent, Container, IconButton, Stack, Typography } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { random } from 'lodash';

export default function MyBasket() {
  const baskets = [

  ];

  const cards = [];


  for (let index = 0; index < 5; index++) {
    cards.push(
      <Card sx={{ mt: 1 }} key={index}>
        <CardContent sx={{ mt: 1 }}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Stack direction="row">
                <Box>
                  <img
                    alt="Remy Sharp"
                    src="https://productimages.hepsiburada.net/s/398/250/110000422913749.jpg"
                    height={50}
                  />
                </Box>
                <Stack>
                  <Typography variant='body2' fontWeight={500}>
                    Lorem ipsum dolor sit amet consectetur
                  </Typography>
                  <Typography variant='caption' color="GrayText">Netflix</Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Typography sx={{ my: { xs: 2, sm: 0 } }} variant='h6'>{random(10000,30000)} Ar</Typography>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Stack direction="row">
                <Box sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid gray",
                  borderRadius: "3rem"
                }}>
                  <IconButton color='primary'>
                    <RemoveIcon />
                  </IconButton>
                  <Typography mx={2}>1</Typography>
                  <IconButton color='primary' >
                    <AddIcon />
                  </IconButton>
                </Box>
                <IconButton sx={{ml:2}}>
                  <DeleteForeverIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );

  }
  return (
    <Wrapper>
      <CardHeader title="Mon Panier" />
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            {cards.map(card => card)}
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant='h6' color="primary">PRODUITS SÉLECTIONNÉS (4)</Typography>
                <Typography variant='h5' fontWeight="500">40 000 Ar</Typography>
              </CardContent>
              <CardContent>
                <Button variant='contained'>Complétez Vos Achats</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}
