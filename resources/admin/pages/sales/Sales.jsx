import PageTitle from '@/admin/component/Layout/PageTitle'
import React from 'react'
import { useFetch } from './useSale'
import Error from '@/admin/component/Message/Error';
import { CircularProgress, Grid } from '@mui/material';
import SaleCard from './SaleCard';

export default function Sales() {
  const { data, isLoading, isError, error } = useFetch();

  if (isError) return <Error error={error} />

  return (
    <>
      <PageTitle pageTitle="Liste" title="Ventes" />

      {isLoading ? <CircularProgress /> :
        <Grid container spacing={1}>
          {
            data.data.map((sale, key) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <SaleCard sale={sale} />
              </Grid>
            ))
          }
        </Grid>}
    </>
  )
}
