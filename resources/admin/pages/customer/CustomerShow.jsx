import React from 'react'
import PageTitle from '../../component/Layout/PageTitle';
import BasicInfo from './BasicInfo';
import CustomerOrders from './CustomerOrders';
import { useShow } from './useCustomers';
import Error from '@/admin/component/Message/Error';
import { CircularProgress } from '@mui/material';

export default function CustomerShow() {
  const { data: customer, error, isError, isLoading } = useShow();

  if (isError) return <Error error={error} />

  return (
    <>
      <PageTitle pageTitle="Clients" title="Detail" />

      {
        isLoading ? <CircularProgress /> :
          <>
            <BasicInfo customer={customer} />
            <CustomerOrders orders={customer.orders} />
          </>
      }
    </>
  )
}
