
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomerOrder from '../orders/CustomerOrder';
import { Typography } from '@mui/material';

const CustomerOrders = ({ orders }) => {

  return <>
    <h4>Ses Commandes</h4>

    {orders.length == 0 ? <Typography>Pas De commandes!</Typography> : <></>}
    <Row>
      {
        orders?.map(order => (
          <Col sm={6} md={4} key={order.id}>
            <CustomerOrder order={order} />
          </Col>
        ))
      }
    </Row>
  </>
}


export default CustomerOrders;