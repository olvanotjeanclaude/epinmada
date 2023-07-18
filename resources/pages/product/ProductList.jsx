import React from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Card, Col, Row, Spinner, Table } from 'react-bootstrap'
import Products from './Products';
import useQueryApi from '../../Hooks/useQueryApi';

function ProductList() {

  const { fetchData } = useQueryApi("products");

  const { data, isLoading, isError, error } = fetchData();


  if (isError) {
    return <Error error={error} />
  }

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