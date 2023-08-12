import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import PageTitle from '../../component/Layout/PageTitle';

export default function SaleShow(){
  return (
    <>
     <PageTitle pageTitle="Factures" title="Detail du facture" />
      <Card>
        <Card.Body>
          <div className="invoice-title">
            <h4 className="float-en font-size-16">Order # 12345</h4>
          </div>

          <hr />

          <div className="d-flex justify-content-between">
            <div className='d-flex flex-column'>
              <strong className='d-block'>Billed To</strong>
              <span>Olvanot Jean Claude</span>
              <span>Rakotonirina</span>
            </div>

            <div className='d-flex flex-column justify-content-end'>
              <Stack className='text-end'>
                <strong>Payment Method:</strong>
                <span> Visa ending **** 4242</span>
                <span>jsmith@email.com</span>
              </Stack>

              <Stack className='text-end mt-2'>
                <strong>Order Date</strong>
                <span>October 16, 2019</span>
              </Stack>
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
                  <th>Item</th>
                  <th className="text-end">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Skote - Admin Dashboard Template</td>
                  <td className="text-end">$499.00</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Skote - Landing Template</td>
                  <td className="text-end">$399.00</td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-end">Sub Total</td>
                  <td className="text-end">$1397.00</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border-0 text-end">
                    <strong>Shipping</strong>
                  </td>
                  <td className="border-0 text-end">$13.00</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border-0 text-end">
                    <strong>Total</strong>
                  </td>
                  <td className="border-0 text-end">
                    <h4 className="m-0">$1410.00</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-print-none">
            <div className="float-end">
              <a className="btn btn-success waves-effect waves-light me-1">
                <i className="fa fa-print"></i>
              </a>
              <a className="btn btn-primary w-md waves-effect waves-light">
                Send
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
