import React from 'react'
import PageTitle from '../../component/Layout/PageTitle';
import BasicInfo from './BasicInfo';
import CustomerOrders from './CustomerOrders';
import { useShow } from './useCustomers';
import Error from '@/admin/component/Message/Error';

export default function CustomerShow() {
  const { data: customer, error, isError, isLoading } = useShow();

  if (isError) return <Error error={error} />

  return (
    <>
      <PageTitle pageTitle="Clients" title="Detail" />
      <BasicInfo customer={customer} isLoading={isLoading} />
      <CustomerOrders orders={customer?.orders} isLoading={isLoading} />
    </>
  )
}
