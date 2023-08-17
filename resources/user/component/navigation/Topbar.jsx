import React from 'react'
import { Badge, Box, Button, Container, IconButton, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import path from '../../menus/path'
import { AccountCircle } from '@mui/icons-material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Topbar() {
  const navigate = useNavigate();

  return (
    <Box bgcolor={grey[100]} boxShadow={1} position="sticky" top={0} zIndex={1}>
      <Container>
        <Box py={1}
          display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3" fontWeight="bold" color="primary">
            EPIN MADA
          </Typography>

          <Stack direction="row" gap={1} alignItems="center">
            <IconButton onClick={() =>navigate(path.basket)}>
              <Badge badgeContent={0} sx={{ mt: 1 }} showZero color="primary">
                <ShoppingCartIcon color="action" />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="account of current user"
              onClick={() => navigate(path.profile)}
              color="primary"
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => navigate(path.profile)}
              color="primary">
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
