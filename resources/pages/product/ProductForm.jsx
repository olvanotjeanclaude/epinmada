import React from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import PrimeAutoComplete from '../../component/prime/PrimeSelect';

function ProductForm() {

  const handleFileUpload = (files) => {
    // Do whatever you want with the uploaded files
    console.log(files);
  };

  return (
    <>
      <PageTitle pageTitle="Produits" title="Nouveau de produit" />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="card-title">Informations de base</h4>
              <p className="card-title-desc">Remplissez toutes les informations ci-dessous</p>


              <Row>
                <Col sm={6}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Nom Du Produit"
                    className="mb-3"
                  >
                    <Form.Control placeholder="Entrez le nom du produit..." />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Brève Description"
                    className="mb-3"
                  >
                    <Form.Control as="textarea" placeholder="Ecrit quelque chose..." />
                  </FloatingLabel>

                  <PrimeAutoComplete placeholder="Catégorie" />

                </Col>
                <Col sm={6}>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Description"
                    className="mb-3"
                  >
                    <Form.Control as="textarea" style={{ height: `${58 * 3 + 1.5 * 16}px` }} placeholder="Description" />
                  </FloatingLabel>
                </Col>
              </Row>

              <div className="d-flex flex-wrap justify-content-end gap-2">
                <button type="submit" className="btn btn-primary waves-effect waves-light">
                  <i className='mdi mdi-content-save'></i>
                  Enregistrer
                </button>
              </div>


            </Card.Body>
          </Card>

          <Card>

            <Card.Body>
              <h4 className="card-title mb-3">Images du produit</h4>

              {/* <PrimeFile /> */}
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </>

  )
}

export default ProductForm