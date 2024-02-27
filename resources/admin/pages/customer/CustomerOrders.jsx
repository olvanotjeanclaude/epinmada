
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomerOrder from '../orders/CustomerOrder';
import {  LinearProgress, Typography } from '@mui/material';

const CustomerOrders = ({ orders, isLoading }) => {

  return (
    <>
      <h4>Commandes</h4>

      {
        isLoading ? <LinearProgress sx={{mb:2}}/> :

          orders.length > 0 ?
            <Row>
              {
                orders?.map(order => (
                  <Col sm={6} xl={4} key={order.id}>
                    <CustomerOrder order={order} />
                  </Col>
                ))
              }

            </Row>
            :
             <Typography>Pas De commandes!</Typography>

      }
    </>)
}


export default CustomerOrders;