import React from 'react'
import PageTitle from '../../component/PageTitle'
import Typography from '@mui/material/Typography'
import { Alert, AlertTitle, Box, Button, Card, CardContent, CircularProgress, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import UploadInvoice from './UploadInvoice'
import { grey } from '@mui/material/colors';
import { useBasket } from '@/user/context/BasketContextProvider'
import OrderSummary from './OrderSummary'
import StepPay from '../basket/StepPay'
import { Navigate } from 'react-router-dom'
import path from '@/user/menus/path'
import { useForm } from 'react-hook-form'
import PaymentOptions from './PaymentOptions'

export default function DoPayment() {
  const basketData = useBasket();
  const baskets = basketData.data?.baskets;

  const isBaskethasPUBG = baskets?.filter(({ product }) => {
    return product.category.name.toLowerCase() == "epin"
  }).length > 0;

  if (baskets?.length == 0) return <Navigate to={path.popular} />

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      pubg_id: "",
      paymentMethod: ""
    }
  });

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
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
                  error={!!errors.pubg_id}
                  helperText={errors?.pubg_id?.message}
                  {...register("pubg_id", {
                    required: " ID de PubG Mobile ne peut pas être vide"
                  })}
                  placeholder='Écris...'
                  label="ID de PubG Mobile"
                />
              </CardContent>
            </Card>}

            <PaymentOptions register={register} errors={errors} />

            <UploadInvoice />
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <OrderSummary basketData={basketData} />

            <StepPay amount={basketData.data.sum_sub_amount}
              buttonType='submit'
              label='Confirmer Et Payer' />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
