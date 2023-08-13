import React from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Button, Card, Col, Row } from 'react-bootstrap'
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
          <Divider />

          <PaymentMethod />

          <Divider />

          <OrderSummary />

          <Divider />
          <div className="d-flex justify-content-end gap-2">
            <Button>
              <i className="mdi mdi-cart-arrow-right me-1"></i>
              Payer
            </Button>
            <Button variant='danger'>
              <i className="mdi mdi-close me-1"></i>
              Anuller
            </Button>
          </div>
        </Col>
      </Row>
    </>
  )
}
