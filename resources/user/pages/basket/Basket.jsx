import { Avatar, Box, Card, CardContent, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { grey } from '@mui/material/colors'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Basket() {
  return (
    <Card sx={{ border: `1px solid ${grey[300]}`, padding: 0}} elevation={0}>
      <CardContent>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={2}>
          <Stack direction="row" spacing={2}>
            <Avatar variant='square' src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2' />
            <Box>
              <Typography  variant="h6">iPhone 11 128 GB</Typography>
              <Typography   variant='body2' color={grey[700]}>128 GB/Aksesuarsız Kutu/Siyah 128 GB/Aksesuarsız Kutu/Siyah</Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} px={1} alignItems="center" justifyContent="center" borderRadius={10}>
            <IconButton color='primary' size='small'>
              <AddCircleIcon />
            </IconButton>
            <Typography variant="h5" color="primary">1</Typography>
            <IconButton color='primary' size='small'>
              <RemoveCircleIcon />
            </IconButton>
          </Stack>

          <Stack>
            <Box display="flex" mt={1} alignItems="center" justifyContent="space-between">
              <Typography variant="h4">23 000 Ar</Typography>
            </Box>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}
