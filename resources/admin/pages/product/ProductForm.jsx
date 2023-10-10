import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Toast } from 'primereact/toast';
import { useProductMutation } from './useProducts';
import SelectCategory from './SelectCategory';
import TextEditor from '@/common/component/TextEditor';
import SimpleUploadFile from '@/common/component/SimpleUploadFile';
import { Box } from '@mui/material';
import PageTitle from '@/admin/component/Layout/PageTitle';
import Submit from '@/admin/component/Button/Submit';
import Error from '@/user/pages/error/Error';

function ProductForm() {
  const {
    product,
    toast, errors,
    text, setText,
    handleSubmit, onSubmit, register, setValue,
    addMutation, updateMutation } = useProductMutation();

  if (product.isError) return <Error error={product.error} />

  const printError = field => errors[field] && <small className="p-error">{errors[field]?.message}</small>;

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
                    <Form.Group>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Nom Du Produit"
                        className="mb-3"
                      >
                        <Form.Control {...register("name")} placeholder="Entrez le nom du produit..." />
                        {printError("name")}
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group>
                      <FloatingLabel
                        controlId="short_description"
                        label="Brève Description"
                        className="mb-3"
                      >
                        <Form.Control as="textarea"
                          {...register("short_description")}
                          style={{ minHeight: "100px" }}
                          placeholder="Ecrit quelque chose..." />
                        {printError("short_description")}
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group>
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
                    </Form.Group>

                    <Form.Group>
                      <SelectCategory register={register} selected={product.data?.category_id ?? ""} />
                      {printError("category")}
                    </Form.Group>

                    <Form.Group>
                      <Box mt={2}>
                        <h4 className="card-title mb-2">Images du produit</h4>
                        <SimpleUploadFile setValue={setValue} />
                        {errors.file && printError("file")}
                      </Box>
                    </Form.Group>
                  </Col>

                  <Col sm={true}>
                    <TextEditor text={text} height={58 * 3.5 + 16} setText={setText} />
                  </Col>
                </Row>

                <br />

                <Submit isLoading={addMutation?.isLoading || updateMutation?.isLoading} />

              </Card.Body>
            </Card>
          </Form>
        </Col>

      </Row>
    </>

  )
}

export default ProductForm