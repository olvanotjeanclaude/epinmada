import React from 'react'
import PageTitle from '../../component/Layout/PageTitle';
import BasicInfo from './BasicInfo';
import CustomerOrders from './CustomerOrders';

export default function CustomerShow() {
  return (
    <>
      <PageTitle pageTitle="Clients" title="Detail" />

       <BasicInfo />

       <CustomerOrders />
    </>
  )
}
