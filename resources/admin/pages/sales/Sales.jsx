import PageTitle from '@/admin/component/Layout/PageTitle'
import React from 'react'
import { useFetch } from './useSale'
import Error from '@/admin/component/Message/Error';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import SaleCard from './SaleCard';
import MUIPagination from '@/common/component/MUIPagination';
import SearchBox from '@/common/component/SearchBox';
import FilterStatus from './FilterStatus';

export default function Sales() {
  const { data, query, setQuery, isLoading, isError, error,
    checkboxs, setCheckboxs,
    setCurrentPage, currentPage
  } = useFetch();


  if (isError) return <Error error={error} />

  return (
    <>
      <PageTitle pageTitle="Liste" title="Ventes" />

      <Box gap={1} flexWrap="wrap" display="flex" justifyContent="space-between" alignItems="center">
        <div>
          <FilterStatus checkboxs={checkboxs} setCheckboxs={setCheckboxs} />
        </div>
        <SearchBox query={query} setQuery={setQuery} />
      </Box>

      {isLoading ? <CircularProgress /> :
        <Grid container spacing={2}>
          {
            data.data.map((sale, key) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <SaleCard sale={sale} />
              </Grid>
            ))
          }
        </Grid>}

      {data?.data.length == 0 ? <Typography>Aucun data</Typography> : <></>}

      <MUIPagination data={data?.meta} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  )
}
