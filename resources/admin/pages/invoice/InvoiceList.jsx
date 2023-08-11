import React from 'react'
import InvoiceCard from './InvoiceCard'
import PageTitle from '../../component/Layout/PageTitle'
import { Col, Row } from 'react-bootstrap'

export default function InvoiceList() {
  return (
    <>
      <PageTitle pageTitle="Factures" title="Liste" />

      <Row>
        {
          Array.from({ length: 6 }).map((value, key) => (
            <Col sm={6}  md={4}  key={key}>
              <InvoiceCard />
            </Col>
          ))
        }
      </Row>
    </>
  )
}
