import React from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Col, Row } from 'react-bootstrap'
import SaleCard from './SaleCard'

export default function Sales() {
  return (
    <>
      <PageTitle pageTitle="Factures" title="Liste" />

      <Row>
        {
          Array.from({ length: 6 }).map((value, key) => (
            <Col sm={6}  md={4}  key={key}>
                <SaleCard />
            </Col>
          ))
        }
      </Row>
    </>
  )
}
