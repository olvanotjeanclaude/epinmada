import React from 'react'
import { Card, Col, Image, Row, Spinner } from 'react-bootstrap'
import { useShow } from './useCustomers'
import Error from '../../component/Message/Error';
import { capitalizeLetter } from '../../Helper/Helper';
import CardRow from '../../component/card/CardRow';
import PageTitle from '../../component/Layout/PageTitle';

export default function CustomerShow() {
  const { data: customer, error, isError, isLoading } = useShow();

  if (isError) return <Error error={error} />

  return (
    <>
      <PageTitle pageTitle="Clients" title="Detail" />

      <Card>
        <Card.Body>
          <h4 className='mb-4'>Information De Base</h4>
        
          {
            isLoading ? <Spinner /> :
              <Row>
                <Col sm={4} md={3}>
                  <Image src='/images/users/avatar-7.jpg' height={150} roundedCircle />
                </Col>
                <Col sm={8} md={9}>
                  <div className="d-flex flex-column gap-2">
                    <CardRow label="Nom" value={capitalizeLetter(customer.name)} />
                    <CardRow label="Prénom" value={capitalizeLetter(customer.surname)} />
                    <CardRow label="Email" value={customer.email?.toLowerCase()} />
                    <CardRow label="Téléphone" value={customer.phone} />
                    <CardRow label="Numéro d'identité" value={customer.identity_number} />
                  </div>
                </Col>
              </Row>
          }
        </Card.Body>
      </Card>
    </>
  )
}