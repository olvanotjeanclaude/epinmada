import React from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Col, Row } from 'react-bootstrap'
import SaleCard from './SaleCard'
import { useQuery } from 'react-query'
import http from '@/common/http'
import { HandleError } from '@/common/HandleError'
import { CircularProgress } from '@mui/material'
import Error from '@/admin/component/Message/Error'

export default function Sales() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: "sales",
    queryFn: async () => await http.get("/sales")
      .then(res => res.data)
      .catch(HandleError.catch),
  });

  if (isError) return <Error error={error} />

  return (
    <>
      <PageTitle pageTitle="Ventes" title="Liste De Ventes" />

      <Row>
        {
          isLoading ? <CircularProgress /> : data.data.map((sale, key) => (
            <Col sm={6} md={4} key={key}>
              <SaleCard sale={sale} />
            </Col>
          ))
        }
      </Row>
    </>
  )
}
