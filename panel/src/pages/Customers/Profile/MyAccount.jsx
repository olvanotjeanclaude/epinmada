import React from 'react'
import { Wrapper } from '../../../components'
import { Card, Divider, Grid, IconButton, Typography } from '@mui/material'
import { CardContent, CardHeader } from '@material-ui/core'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function MyAccount() {
  return (
    <Wrapper>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <ModeEditIcon />
            </IconButton>
          }
          title="Informations générales" />
        <CardContent>
          <Divider />
          <Grid container>
            <Grid padding={1} item xs={12} sm={4}>
              <Typography variant='body1' fontWeight="500">Nom</Typography>
            </Grid>
            <Grid padding={1} item xs={12} sm={8}>
              <Typography variant='body2'>Rakotonirina</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid padding={1} item xs={12} sm={4}>
              <Typography variant='body1' fontWeight="500">Prenom</Typography>
            </Grid>
            <Grid padding={1} item xs={12} sm={8}>
              <Typography variant='body2'>Olvanot Jean Claude</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid padding={1} item xs={12} sm={4}>
              <Typography variant='body1' fontWeight="500">Genre</Typography>
            </Grid>
            <Grid padding={1} item xs={12} sm={8}>
              <Typography variant='body2'>Homme</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid padding={1} item xs={12} sm={4}>
              <Typography variant='body1' fontWeight="500">Addresses E-mail</Typography>
            </Grid>
            <Grid padding={1} item xs={12} sm={8}>
              <Typography variant='body2'>olvanotjcs@gmail.com</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid padding={1} item xs={12} sm={4}>
              <Typography variant='body1' fontWeight="500">Téléphone</Typography>
            </Grid>
            <Grid padding={1} item xs={12} sm={8}>
              <Typography variant='body2'>0541 886 90 37</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Wrapper>
  )
}

export default MyAccount