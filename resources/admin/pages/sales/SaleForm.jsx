import React from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Card, Col, Row } from 'react-bootstrap'
import Products from './component/Products'
import PaymentMethod from '../../component/card/PaymentMethod'
import { Divider } from 'primereact/divider'
import OrderSummary from './component/OrderSummary'


export default function SaleForm() {
  return (
    <>
      <PageTitle pageTitle="Ventes" title="Nouveau Vente" />
      <Row>
        <Col sm={8} lg={7}>
          <Products />
        </Col>

        <Col sm={4} lg={5}>
          <br /><br />
          <PaymentMethod />
          <Divider />
          <OrderSummary />
        </Col>
      </Row>
    </>
  )
}
