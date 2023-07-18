import React from 'react'
import { useParams } from 'react-router-dom';
import useQueryApi from '../../Hooks/useQueryApi';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import Error from '../../component/Message/Error';
import Specification from './Specification';
import PageTitle from '../../component/Layout/PageTitle';
import Review from './Review';

function ProductShow() {
  const { id } = useParams();

  const { showData } = useQueryApi("products");

  const { data: product, isLoading, error } = showData(id);

  if (isLoading) {
    return <Spinner />
  }

  if (!product) {
    return <Error error={error} />;
  }

  console.log(product);

  return (
    <>
      <PageTitle pageTitle="Produits" title="Detail du produit" />

      <Card>
        <Card.Body>
          <Row>
            <Col xl={4}>
              <div>
                <img src={`${product.image_url}`} alt="" className="img-fluid mx-auto d-block" />
              </div>
            </Col>

            <Col xl={8}>
              <div className="mt-4 mt-xl-3">
                <a className="text-primary">{product.category.name}</a>
                <h4 className="mt-1 mb-3">{product.name}</h4>


                {/* <p className="text-muted mb-4">( 152 Customers Review )</p> */}

                {/* <h6 className="text-success text-uppercase">20 % Off</h6> */}

                <h5 className="mb-4">
                  <span> Prix : </span>
                  {/* <span className="text-muted me-2"><del>$240 USD</del></span>  */}
                  <b>{product.formatted_price}</b>
                </h5>

                <p className="text-muted mb-4">{product.category?.description}</p>

                <div className="mb-4">
                  <Button variant='danger' className="waves-effect  mt-2 waves-light">
                    <i className="bx bx-trash-alt me-2"></i>
                    Supprimer
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* <Specification /> */}


          {/* <Review /> */}

        </Card.Body>
      </Card>
    </>
  )
}

export default ProductShow