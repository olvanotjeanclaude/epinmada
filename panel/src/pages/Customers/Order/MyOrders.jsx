import { Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import { Wrapper } from '../../../components'
import { Avatar } from '@material-ui/core'

export default function MyOrders() {
  return (
    <Wrapper>
      <CardHeader title="Mes Commandes" />
      <Card >
        <CardContent>
          <Typography marginBottom={2} variant='h6'>Jeudi 27 avril 2023</Typography>
          <Box sx={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between" }}>
            <Stack direction={"row"}>
              <Avatar
                alt="Remy Sharp"
                src="https://placehold.co/"
                sx={{ width: 56, height: 56 }}
              />
              <Stack marginLeft={2} direction="column">
                <Box sx={{ display: "flex" }}>
                  <Typography variant='body1'>
                    Commande No:
                  </Typography>
                  <Typography variant='body1' component="span" sx={{ fontWeight: "bold" }}>1111</Typography>
                </Box>
                <Typography variant="body1" color="green" component="span">
                  Delivered
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column">
              <Typography variant="body1" color="green" fontWeight="bold" component="span">
                1 300 Ar
              </Typography>
              <Typography variant="body1" color="GrayText" component="span">
                Orange Money
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Wrapper>
  )
}
