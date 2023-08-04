import { Button, Card, Col, Row, Spinner, Stack } from 'react-bootstrap';
import Error from '../../component/Message/Error';
import PageTitle from '../../component/Layout/PageTitle';
import { useDeleteMutation, useShow } from './useProducts';
import { onDeleteData } from '../../Helper/sweetAlert';
import { Link, Navigate } from 'react-router-dom';

function ProductShow() {
  const { isError, error, isLoading, product } = useShow();
  const deleteMutation = useDeleteMutation();

  const onDelete = async (product) => await onDeleteData(product, deleteMutation);

  if (deleteMutation.isSuccess) {
    return <Navigate to="/produits" />
  }

  if (isError) return <Error error={error} />;

  if (isLoading) return <Spinner />

  return (
    <>
      <PageTitle pageTitle="Produits" title="Detail du produit" />

      <Card>
        <Card.Body>
          <Row>
            <Col sm={4}>
              <div>
                <img src={`${product.image_url}`} alt="" style={{ width: "60%" }} className="img-fluid w-100 mx-auto d-block" />
              </div>
            </Col>

            <Col sm={8}>
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

                <Stack>
                  <h6>Description:</h6>
                  <p>{product.short_description}</p>
                </Stack>

                <div dangerouslySetInnerHTML={{ __html: product.long_description }} />

                <div className="d-flex gap-2">
                  <Button disabled={deleteMutation.isLoading}
                    onClick={() => onDelete(product)} variant='danger' className="waves-effect  mt-2 waves-light">
                    <i className="bx bx-trash-alt me-2"></i>
                    Supprimer
                  </Button>
                  <Link to="edit" className="waves-effect btn btn-success  mt-2 waves-light">
                    <i className="bx bx-edit-alt me-2"></i>
                    Editer
                  </Link>
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