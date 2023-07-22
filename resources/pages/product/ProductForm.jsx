import React, { useState } from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import PrimeFile from '../../component/prime/PrimeFile';
import { InputNumber } from 'primereact/inputnumber';
import { Editor } from "primereact/editor";
import useFormLogic from '../../Hooks/useFormLogic';
import useProductForm from '../../Hooks/useProductForm';
import PrimeFilterableSelect from '../../component/prime/PrimeFilterableSelect';


function ProductForm() {
  const { handleSubmit, control, errors, register, setValue } = useFormLogic("produits", "products", useProductForm);
  const [text, setText] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  }

  const printError = (field) => errors[field] && <small className="p-error">{errors[field].message}</small>;

  return (
    <>
      <PageTitle pageTitle="Produits" title="Nouveau de produit" />

      <Row>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="needs-validation" method="post">
            <Card>
              <Card.Body>
                <h4 className="card-title">Informations de base</h4>
                <p className="card-title-desc">Remplissez toutes les informations ci-dessous</p>

                <Row>
                  <Col sm={5}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Nom Du Produit"
                      className="mb-3"
                    >
                      <Form.Control {...register("name")} placeholder="Entrez le nom du produit..." />
                      {printError("name")}
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="short_description"
                      label="Brève Description"
                      className="mb-3"
                    >
                      <Form.Control as="textarea"
                        {...register("short_description")}
                        style={{ minHeight: "80px" }}
                        placeholder="Ecrit quelque chose..." />
                      {printError("short_description")}
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="price"
                      label="Prix"
                      className="mb-3"
                    >
                      <Form.Control
                        type='number'
                        {...register("price")}
                        placeholder="Prix" />
                      {printError("short_description")}
                    </FloatingLabel>

                    {/* <InputNumber placeholder='Prix'
                      {...register("price")}
                      className='w-100 mb-3'
                      inputId="locale-user"
                      locale='mg-MG'
                      onValueChange={(e) => { }}
                      minFractionDigits={2} /> */}

                    <PrimeFilterableSelect
                      control={control}
                      setValue={setValue}
                      name="category"
                      apiUrl="categories"
                      placeholder="Catégorie" />
                    {printError("category")}
                  </Col>
                  <Col sm={true}>
                    <Editor value={text}
                      {...register("long_description")}
                      placeholder='Description'
                      onTextChange={(e) => setText(e.htmlValue)}
                      style={{ height: `${58 * 3.5 + 16}px` }} />
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
          </Form>

          <Card>
            <Card.Body>
              <h4 className="card-title mb-3">Images du produit</h4>

              <PrimeFile />
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </>

  )
}

export default ProductForm