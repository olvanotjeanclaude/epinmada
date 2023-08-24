import React, { useState } from 'react';
import { Card, Col, Image, Row, Stack } from 'react-bootstrap';
import PageTitle from '../../component/Layout/PageTitle';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useShow } from './useSale';
import { Button, CircularProgress } from '@mui/material';
import Error from '@/admin/component/Message/Error';
import PanoramaIcon from '@mui/icons-material/Panorama';
import { camelToCapitalized, capitalizeLetter, computeAmount, formatDateTime, } from '@/common/helper';
import { StatusForm } from './StatusForm';


export default function SaleShow() {
  const [visible, setVisible] = useState(false);

  const { data: sale, isLoading, error, isError } = useShow();

  if (isLoading) return <CircularProgress />;

  if (isError) return <Error error={error} />;

  return (
    <>
      <PageTitle pageTitle="Ventes" title="Detail du facture" />

      <ConfirmDialog />

      <Row>
        <Col md={4}>

          <Button startIcon={<PanoramaIcon />} size='large' variant='contained' onClick={() => setVisible(true)}>
            Voir la facture
          </Button>
          <Dialog header={sale.unique_id} visible={visible} onHide={() => setVisible(false)}>
            <Image src={`/${sale.invoice_image}`} fluid />
          </Dialog>

          <Divider />

          <StatusForm sale={sale} />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <div className="invoice-title">
                <h4 className="float-en font-size-16">Ordre No <strong>{sale.unique_id}</strong></h4>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div className='d-flex flex-column'>
                  <strong className='d-block'>Facturé à</strong>
                  <Stack>
                    <span>{capitalizeLetter(sale.customer.name)}</span>
                    <span>{capitalizeLetter(sale.customer.surname)}</span>
                    <span>{sale.customer.email}</span>
                    <span>{sale.customer.phone}</span>
                  </Stack>
                </div>

                <div className='d-flex flex-column justify-content-end'>
                  <Stack className='text-end mt-2'>
                    <strong>Date</strong>
                    <span>{formatDateTime(sale.created_at)}</span>
                  </Stack>

                  <Stack className='text-end'>
                    <strong>Mode de paiement</strong>
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
                          <td>{order.product.unique_id}</td>
                          <td>{order.product.name}</td>
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
      </Row>
    </>
  );
};
