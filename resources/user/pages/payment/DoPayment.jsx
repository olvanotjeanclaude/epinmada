import React, { useEffect, useState } from 'react'
import PageTitle from '../../component/PageTitle'
import Typography from '@mui/material/Typography'
import { Box, Card, CardContent, Grid, Stack, TextField } from '@mui/material'
import UploadInvoice from './UploadInvoice'
import { useBasket } from '@/user/context/BasketContextProvider'
import OrderSummary from './OrderSummary'
import StepPay from '../basket/StepPay'
import { Navigate, useNavigate } from 'react-router-dom'
import path from '@/user/menus/path'
import { useForm } from 'react-hook-form'
import PaymentOptions from './PaymentOptions'
import { useMutation, useQueryClient } from 'react-query'
import http from '@/common/http'
import { HandleError } from '@/common/HandleError'
import Swal from 'sweetalert2'
import { allErrors } from '@/admin/Helper/Helper'
import { confirmButton } from '@/admin/Helper/sweetAlert'
import PaymentPusher from '@/common/component/PaymentPusher'
import axios from 'axios'

export default function DoPayment() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const basketData = useBasket();
  const baskets = basketData.data?.baskets;
  const [paymentResult, setPaymentResult] = useState({ isLoading: false, data: null });

  const isBasketHasPUBG = baskets?.filter(({ product }) => {
    return product.category.name.toLowerCase() == "epin"
  }).length > 0;

  const { register, handleSubmit, setValue, getValues, formState: { errors, isValid } } = useForm({
    defaultValues: {
      pubg_id: "",
      paymentMethod: "",
      payment_phone_number: ""
      // files: null
    }
  });

  const payMutation = useMutation({
    mutationKey: "payMutation",
    mutationFn: async (data) => await http.post(data.endpoint, data)
      .then(res => { return res.data })
      .catch(HandleError.catch)
  });

  const handleMvolaPayment = data => {
    const successMessage = {
      icon: "success",
      title: "Success",
      titleText: "Paiement effectué avec succès",
      ...confirmButton
    };

    const errorMessage = {
      icon: "error",
      title: "Erreur",
      titleText: "Paiement échoué. Veuillez répéter plus tard.",
      ...confirmButton
    };

    payMutation.mutate({ ...data, endpoint: "/mvola/initiate-transaction" }, {
      onSuccess(data) {
        const checkPayment = setInterval(async () => {
          const transaction = await http.get(`mvola/transactions/${data.serverCorrelationId}`)
            .then(res => res.data)
            .catch(() => {
              Swal.fire(errorMessage);
              clearInterval(checkPayment);
            });
            
          const transactionStatus = transaction?.status;

          switch (transactionStatus) {
            case "completed":
              Swal.fire(successMessage);
              break;
            case "failed":
              Swal.fire(errorMessage);
              break;
          }

          if (transactionStatus == "completed" || transactionStatus == "failed") {
            setPaymentResult({ data: transaction, isLoading: false });
            clearInterval(checkPayment);
          }
        }, 5000);
      },
      onError(error) {
        Swal.fire(errorMessage)
        setPaymentResult({ data: error, isLoading: false });
      }
    });
  }

  const handlePayment = data => {
    setPaymentResult(prev => ({ ...prev, isLoading: true }));
    switch (data.paymentMethod) {
      case "Mvola":
        handleMvolaPayment(data);
        break;

      default:
        Swal.fire({ icon: "info", title: "Message", titleText: "Payment API not yet ready", ...confirmButton })
        setPaymentResult(prev => ({ ...prev, isLoading: false }));
        break;
    }
  }

  const onSubmit = data => { handlePayment(data) }

  if (baskets?.length == 0) return <Navigate to={path.popular} />

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
