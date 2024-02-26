import React, { useState } from 'react';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import PageTitle from '../../component/Layout/PageTitle';
import { useShow } from './useSale';
import { Button, CircularProgress } from '@mui/material';
import Error from '@/admin/component/Message/Error';
import PanoramaIcon from '@mui/icons-material/Panorama';
import { camelToCapitalized, capitalizeLetter, computeAmount, formatDateTime, } from '@/common/helper';
import { StatusForm } from './StatusForm';
import ModalInvoiceImage from './ModalInvoiceImage';


export default function SaleShow() {
  const [open, setOpen] = useState(false);

  const { data: sale, isLoading, error, isError } = useShow();

  if (isLoading) return <CircularProgress />;

  if (isError) return <Error error={error} />;

  return (
    <>
      <PageTitle pageTitle="Ventes" title="Detail du facture" />

      {isLoading ? <CircularProgress /> : <Row>
        <Col md={4}>

          {sale.invoice_image &&<Button startIcon={<PanoramaIcon />} size='large' variant='contained' onClick={() => setOpen(true)}>
            Voir la facture
          </Button>}

          <hr />

          <StatusForm sale={sale} />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <div className="invoice-title d-flex justify-content-between">
                <h4 className="font-size-16">Ordre No <strong>{sale.unique_id}</strong></h4>

                <h4 className='font-size-16'>{formatDateTime(sale.created_at)}</h4>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div className='d-flex flex-column'>
                  <strong className='d-block'>Facturé à</strong>
                  <Stack gap={1}>
                    <span>{capitalizeLetter(sale.customer.full_name)}</span>
                    <span>{sale.customer.email}</span>
                    <span>{sale.customer.phone}</span>
                  </Stack>
                </div>

                <div className='d-flex flex-column gap-1 justify-content-end'>
                  <Stack className='text-end'>
                    <strong>Payement</strong>
                    <span>{camelToCapitalized(sale.payment_mode)}</span>
                  </Stack>

                  {sale.pubg_id && <Stack className='text-end'>
                    <strong>PUBG ID</strong>
                    <span>{sale.pubg_id}</span>
                  </Stack>}
                </div>
              </div>


              <div className="py-2 mt-3">
                <h3 className="font-size-15 fw-bold">Commandes</h3>
              </div>
              <div className="table-responsive">
                <table className="table table-nowrap">
                  <thead>
                    <tr>
                      <th style={{ width: '70px' }}>No.</th>
                      <th>Produit</th>
                      <th>Quantité</th>
                      <th className="text-end">Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      sale.orders.map((order, index) => (
                        <tr key={index}>
                          <td>{order.product?.unique_id}</td>
                          <td>{order.product?.name}</td>
                          <td>{order.quantity}</td>
                          <td className="text-end">{order.formattedSubAmount}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4} className='text-end'>Total: {computeAmount(sale.orders)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>}

      <ModalInvoiceImage open={open} sale={sale} setOpen={setOpen} />
    </>
  );
};
