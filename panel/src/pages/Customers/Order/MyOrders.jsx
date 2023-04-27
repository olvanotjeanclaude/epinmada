import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { Wrapper } from '../../../components'
import { Avatar } from '@material-ui/core'

export default function MyOrders() {
  return (
    <Wrapper>
      <Card>
        <CardContent>
          <Typography marginBottom={2} variant='h6'>Jeudi 27 avril 2023</Typography>
          <Box sx={{ display: "flex",flexWrap:"nowrap", justifyContent: "space-between" }}>
            <Stack direction={"row"}>
              <Avatar
                alt="Remy Sharp"
                src="https://placehold.co/"
                sx={{ width: 56, height: 56 }}
              />
              <Stack marginLeft={3}>
                <Box>
                  <Typography variant="subtitle" color="GrayText" component="span">
                    Commande No:
                  </Typography>
                  <Typography component="span" sx={{ fontWeight: "bold" }}>111111</Typography>
                </Box>
                <Typography color={"GrayText"}>
                  jeudi 27 avril 2023
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="h6" color="GrayText" component="p">
                   Delivered
              </Typography>
            </Stack>
            <Stack direction="column">
              <Typography variant="bold" color="green" component="span">
                   1 300 Ar
              </Typography>
              <Typography variant="small" sx={{fontWeight:"bold"}} color="GrayText" component="span">
                   Orange Money
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Wrapper>
  )
}
