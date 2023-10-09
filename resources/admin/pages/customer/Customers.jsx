import PageTitle from '@/admin/component/Layout/PageTitle';
import React from 'react'
import { useFetchAll } from './useCustomers';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import Customer from './Customer';
import Pagination from '@/common/component/MUIPagination';
import SearchBox from '@/common/component/SearchBox';
import Error from '@/admin/component/Message/Error';

export default function Customers() {
    const { isLoading, data, error, isError, setCurrentPage, currentPage, query, setQuery } = useFetchAll()

    if (isError) return <Error error={error} />

    return <>
        <PageTitle pageTitle="Clients" title="Liste" />

        <SearchBox query={query} setQuery={setQuery} />

        {
            isLoading ? <CircularProgress /> :

                <Box minHeight={"60vh"}>
                    <Grid container spacing={1}>
                        {data.data.map(customer => (
                            <Grid item xs={12} sm={6} lg={4} xl={3} key={customer.id}>
                                <Customer customer={customer} />
                            </Grid>
                        ))}
                    </Grid>

                    {data.data.length==0 ? <Typography>Aucun data</Typography>:<></>}
                </Box>
        }

        {data ? <Pagination data={data} setCurrentPage={setCurrentPage} currentPage={currentPage} /> : <></>}
    </>
}
