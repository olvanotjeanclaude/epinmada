import React, { useEffect } from 'react'
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

export default function DoPayment() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const basketData = useBasket();
  const baskets = basketData.data?.baskets;

  const isBasketHasPUBG = baskets?.filter(({ product }) => {
    return product.category.name.toLowerCase() == "epin"
  }).length > 0;

  const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm({
    defaultValues: {
      pubg_id: "",
      paymentMethod: "",
      files: null
    }
  });

  useEffect(() => {
    register("files", {
      required: "veuillez entrer l'image de la facture"
    })
  }, []);

  const payMutation = useMutation({
    mutationKey: "payMutation",
    mutationFn: async (data) => await http.post("/sales", data)
      .then(res => res.data)
      .catch(HandleError.catch)
  })

  const onSubmit = data => {
    payMutation.mutate(data, {
      onSuccess(data) {

        if (data.code == 422) {
          Swal.fire({
            icon: "error",
            title: "Erreur",
            titleText: allErrors(data.errors).join(" "),
            ...confirmButton
          })
        }

        if (data.code == 200) {
          queryClient.invalidateQueries("front.baskets");
          navigate(path.orders, {
            state: { ...data }
          });
        }
      },
      error(error) {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          titleText: JSON.stringify(error)
        })
      }
    })
  }

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
                  onChange={event => setValue("pubg_id",event.target.value.toUpperCase())}
                />
              </CardContent>
            </Card>}

            <PaymentOptions register={register} errors={errors} />

            <UploadInvoice errors={errors} register={register} setValue={setValue} />
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <OrderSummary basketData={basketData} />

            <StepPay loading={payMutation.isLoading} isValid={isValid} amount={basketData.data.sum_sub_amount}
              buttonType='submit'
              label='Confirmer Et Payer' />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
