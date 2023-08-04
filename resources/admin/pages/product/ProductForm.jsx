import { useEffect, useState } from 'react'
import PageTitle from '../../component/Layout/PageTitle'
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import PrimeFile from '../../component/prime/PrimeFile';
import { Editor } from "primereact/editor";
import PrimeFilterableSelect from '../../component/prime/PrimeFilterableSelect';
import { Toast } from 'primereact/toast';
import Submit from '../../component/Button/Submit';
import Error from '../../component/Message/Error';
import { useProductMutation } from './useProducts';

function ProductForm() {
  const [text, setText] = useState("");

  const {
    product,
    toast, action,
    errors, handleSubmit, onSubmit, register, control,
    addMutation, updateMutation, setValue,
  } = useProductMutation();


  useEffect(() => setText(product.data?.long_description) , [product.data]);

  const onChangeLongDescription = (e) => {
    setText(e.htmlValue);
    setValue("long_description", e.htmlValue);
  }

  if (product.isError) {
    return <Error error={product.error} />
  }

  const printError = field => errors[field] && <small className="p-error">{errors[field].message}</small>;

  return (
    <>
      <Toast ref={toast} />

      <PageTitle pageTitle="Produits" title={`${product ? 'Modification' : 'Nouveau'} de produit`} />

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

                <Submit isLoading={addMutation?.isLoading || updateMutation?.isLoading} />

              </Card.Body>
            </Card>
          </Form>

          <Card>
            <Card.Body>
              <h4 className="card-title mb-3">Images du produit</h4>

              <PrimeFile model="product" action={action} />

            </Card.Body>
          </Card>
        </Col>

      </Row>
    </>

  )
}

export default ProductForm