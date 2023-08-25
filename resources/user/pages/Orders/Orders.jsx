import { Alert, CircularProgress, Grid, Snackbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageTitle from '@/user/component/PageTitle'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import http from '@/common/http'
import { HandleError } from '@/common/HandleError'
import Error from '../error/Error'
import Order from './Order'

export default function Orders() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { state: orderSuccess } = useLocation();

  const { data: orders, isLoading, error, isError } = useQuery({
    queryKey: "front.orders",
    queryFn: async () => http.get("/my-orders")
      .then(res => res.data)
      .catch(HandleError.catch)
  })

  useEffect(() => {
    if (orderSuccess?.type == "success") {
      setSnackbarOpen(true);
    }
  }, [orderSuccess]);


  if (isError) return <Error error={error} />

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={() => setSnackbarOpen(false)}>
        <Alert variant='filled' onClose={() => setSnackbarOpen(false)} severity="success">
          {orderSuccess?.message}
        </Alert>
      </Snackbar>

      <PageTitle title="Mes Commandes" />
      <Grid container spacing={1} mb={2}>
        {
          orders.map((order) => (
            <Grid item md={6} key={order.id} sx={{ width: "100%" }}>
              <Order order={order} />
            </Grid>
          ))
        }
      </Grid>

      {orders.length == 0 ? <Typography>Pas De commandes!</Typography> : <></>}
    </>
  )
}
