import React from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Card } from 'react-bootstrap'
import Products from './Products';

function ProductList() {
  return (
    <>
      <PageTitle pageTitle="Produits" title="Liste de produit" />
      <Card>
        <Card.Body>
          <Products />
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductList