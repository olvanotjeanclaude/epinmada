import React, { useRef, useState } from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import PrimeFile from '../../component/prime/PrimeFile';
import { Editor } from "primereact/editor";
import useProductForm from '../../Hooks/useProductForm';
import PrimeFilterableSelect from '../../component/prime/PrimeFilterableSelect';
import useFormLogic from '../../Hooks/useFormLogic';
import { Toast } from 'primereact/toast';

function ProductForm() {
  const toast = useRef(null);

  const {
    addMutation,
    updateMutation,
    handleSubmit,
    control,
    errors,
    register,
    setValue,
    action,
    onError,
    onSuccess
  } = useFormLogic({ path: "produits", apiUrl: "products", useDataForm: useProductForm, toast });

  const [text, setText] = useState("");

  const onChangeLongDescription = (e) => {
    setText(e.htmlValue);
    setValue("long_description", e.htmlValue);
  }

  const onSubmit = async (data) => {
    const params = {
      ...data,
      category: data.category.id
    }

    switch (action) {
      case "store":
        addMutation.mutate(params, { onError, onSuccess });
        break;

      case "update":
        updateMutation.mutate((params), { onError, onSuccess });
        break;

      default:
        alert("Unknown error");
        break;
    }
  }


  const printError = (field) => {
    return errors[field] && <small className="p-error">{errors[field].message}</small>;
  };

  return (
    <>
      <Toast ref={toast} />

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
                      {printError("price")}
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
                      name="category"
                      apiUrl="categories"
                      placeholder="Catégorie" />
                    {printError("category")}
                  </Col>
                  <Col sm={true}>
                    <Editor value={text}
                      {...register("long_description")}
                      placeholder='Description'
                      onTextChange={onChangeLongDescription}
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

              <PrimeFile model="product" />

            </Card.Body>
          </Card>
        </Col>

      </Row>
    </>

  )
}

export default ProductForm