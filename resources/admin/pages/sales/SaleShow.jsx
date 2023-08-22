import React, { useState } from 'react';
import { Card, Col, Image, Row, Stack } from 'react-bootstrap';
import PageTitle from '../../component/Layout/PageTitle';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useShow } from './useSale';
import { CircularProgress } from '@mui/material';
import Error from '@/admin/component/Message/Error';
import { camelToCapitalized, capitalizeLetter, computeAmount, formatDateTime, } from '@/common/helper';


export default function SaleShow() {
  const [visible, setVisible] = useState(false);
  const imageSrc = "https://assetsnffrgf-a.akamaihd.net/assets/m/501100078/univ/art/501100078_univ_lss_lg.jpg";

  const { data: sale, isLoading, error, isError } = useShow();

  if (isLoading) return <CircularProgress />;

  if (isError) return <Error error={error} />;

  const confirmSale = () => {
    confirmDialog({
      message: 'Êtes-vous sur de vouloir continuer?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: "Oui",
      rejectLabel: "Non",
      accept: () => { console.log("ok") },
      reject: () => { }
    });
  };

  return (
    <>
      <PageTitle pageTitle="Ventes" title="Detail du facture" />

      <ConfirmDialog />

      <Row>
        <Col md={4}>
          <Image role='button' src={imageSrc} fluid onClick={() => setVisible(true)} />
          <Dialog header="# 12345" visible={visible} onHide={() => setVisible(false)}>
            <Image src={imageSrc} fluid />
          </Dialog>


          <div className="d-flex mt-3 justify-content-center">
            <button onClick={confirmSale}
              type="button" className="btn btn-success waves-effect waves-light">
              <i className="bx bx-check font-size-16 align-middle me-2"></i>
              Confirmer
            </button>
          </div>

          <Divider />
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
