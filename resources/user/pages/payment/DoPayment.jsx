import React from 'react'
import PageTitle from '../../component/PageTitle'
import Typography from '@mui/material/Typography'
import { Alert, AlertTitle, Box, Button, Card, CardContent, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import UploadInvoice from './UploadInvoice'
import { grey } from '@mui/material/colors';
import { useBasket } from '@/user/context/BasketContextProvider'
import OrderSummary from './OrderSummary'
import StepPay from '../basket/StepPay'
import { Navigate } from 'react-router-dom'
import path from '@/user/menus/path'

export default function DoPayment() {
  const basketData = useBasket();
  const baskets = basketData.data?.baskets;

  const isBaskethasPUBG = baskets?.filter(({ product }) => {
    return product.category.name.toLowerCase() == "epin"
  }).length > 0;

  if (baskets?.length == 0) return <Navigate to={path.popular} />

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <PageTitle title="Payment" />

      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            {isBaskethasPUBG && <Card>
              <CardContent>
                <Typography variant="h5" mb={1}>Veuillez saisir votre ID de PubG Mobile</Typography>

                <TextField
                  fullWidth
                  rows={3}
                  placeholder='Écris...'
                  label="ID de PubG Mobile"
                  multiline
                />
              </CardContent>
            </Card>}

            <Card>
              <CardContent>
                <Typography variant="h5" mb={1}>Options De Paiement</Typography>

                <Box display="flex" flexWrap="wrap" gap={2}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio sx={{ height: "30px" }} />} label="Orange Money" />
                      <FormControlLabel value="male" control={<Radio sx={{ height: "30px" }} />} label="Airtel Money" />
                      <FormControlLabel value="other" control={<Radio sx={{ height: "30px" }} />} label="Mvola" />
                    </RadioGroup>
                  </FormControl>

                  <Alert sx={{ flexGrow: 1 }} severity="info">
                    <AlertTitle>vous pouvez envoyer l'argent à :</AlertTitle>
                    <Stack>
                      <Typography variant="paragraph" component="p">032 00 000 00</Typography>
                      <Typography variant="paragraph" component="p">033 00 000 00</Typography>
                      <Typography variant="paragraph" component="p">034 00 000 00</Typography>
                    </Stack>
                  </Alert>
                </Box>
              </CardContent>
            </Card>

            <UploadInvoice />
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>

          <Stack spacing={2}>
            <OrderSummary basketData={basketData} />

            <StepPay amount={basketData.data.sum_sub_amount} label=' Confirmer Et Payer' />

          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
