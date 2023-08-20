import React from 'react'
import { Badge, Box, Button, Container, IconButton, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import { AccountCircle } from '@mui/icons-material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useBasket } from '@/user/context/BasketContextProvider'
import useAuth from '@/common/hook/useAuth'
import path from '@/user/menus/path'

export default function Topbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { data } = useBasket();

  return (
    <Box bgcolor={grey[100]} boxShadow={1} position="sticky" top={0} zIndex={100}>
      <Container>
        <Box py={1}
          display="flex" justifyContent="space-between" alignItems="center">

          <Button onClick={() => open("/", "_blank")}>
            <Typography variant="h3" fontWeight="bold" color="primary">
              EPIN MADA
            </Typography>
          </Button>

          <Stack direction="row" gap={1} alignItems="center">
            <IconButton onClick={() => navigate(path.basket)}>
              <Badge badgeContent={data?.count} sx={{ mt: 1 }} showZero color="primary">
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
              onClick={() => logout()}
              color="primary">
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
