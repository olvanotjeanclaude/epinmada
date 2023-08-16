import React from 'react'
import PageTitle from '../../component/PageTitle'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import path from '../../menus/path';

const CardHead = (props) => {
  return <Stack {...props} maxWidth={{ xs: "11rem", sm: "16rem" }}>
    <Typography variant="h6" noWrap>Apple Lightning Konnektörlü EarPods</Typography>
    <Typography variant="body2" color={grey[700]}>Lizards</Typography>
  </Stack>
};

const Price = (props) => (
  <Typography {...props} variant='h5' fontWeight="bold" mt={1}>
    450 000 Ar
  </Typography>
);

const AddToCartButton = ({ sx }) => (
  <Link to={path.payment} style={{textDecoration:"none"}}>
    <Button fullWidth sx={{ mt: 1, ...sx }}
      variant='contained'
      startIcon={<AddShoppingCartIcon />}>
      Ajouter
    </Button>
  </Link>
);

export default function Populars() {
  return (
    <>
      <PageTitle title="Populaire Produits" />

      <Box>
        <Grid container spacing={1}>
          {
            Array.from({ length: 6 }).map((_, index) => (
              <Grid sx={{ width: "100%" }} item md={4} lg={3} key={index}>
                <Card>
                  <CardContent>
                    <Box py={1} display="flex" justifyContent={{ md: "center" }}>
                      <img
                        component="img"
                        alt="green iguana"
                        // height="140"
                        width="110"
                        height="110"
                        src="https://productimages.hepsiburada.net/s/337/550/110000031510507.jpg/format:webp"
                      />
                      <Stack display={{ md: "none" }}>
                        <CardHead />
                        <Price />
                        <AddToCartButton />
                      </Stack>
                    </Box>

                    <Stack display={{ xs: "none", md: "block" }}>
                      <CardHead />
                      <Price />
                    </Stack>

                    <AddToCartButton sx={{ display: { xs: "none", md: "flex" } }} />
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}
