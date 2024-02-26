import React from 'react'
import PageTitle from '../../component/PageTitle'
import Typography from '@mui/material/Typography'
import { Box, Card, CardContent, Grid, Stack, TextField } from '@mui/material'
import OrderSummary from './OrderSummary'
import StepPay from '../basket/StepPay'
import { Navigate } from 'react-router-dom'
import path from '@/user/menus/path'
import PaymentOptions from './PaymentOptions'
import usePayment from './usePayment'

export default function DoPayment() {
  const {
    setPaymentResult,
    handleMvolaPayment,
    baskets,
    register, setValue, formState: { errors, isValid }, handleSubmit,
    basketData,
    isBasketHasPUBG,
    paymentResult,
    apiNotReady
  } = usePayment();

  const handlePayment = (data) => {
    setPaymentResult(prev => ({ ...prev, isLoading: true }));
    switch (data.paymentMethod) {
      case "Mvola":
        handleMvolaPayment(data);
        break;
      default:
        apiNotReady();
        break;
    }
  }

  if (baskets?.length == 0) return <Navigate to={path.popular} />

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handlePayment)}
    >
      <PageTitle title="Payment" />

      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            {isBasketHasPUBG && <Card>
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
                  onChange={event => setValue("pubg_id", event.target.value.toUpperCase())}
                />
              </CardContent>
            </Card>}

            <PaymentOptions register={register} errors={errors} />
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <OrderSummary basketData={basketData} />

            <StepPay
              loading={paymentResult.isLoading}
              isValid={isValid}
              amount={basketData?.data?.sum_sub_amount}
              buttonType='submit'
              label='Confirmer Et Payer' />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
