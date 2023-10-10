import PageTitle from '../../component/Layout/PageTitle'
import { Card } from 'react-bootstrap'
import Products from './Products';
import CreateButton from '../../component/Button/CreateButton';

function ProductList() {
  return (
    <>
      <PageTitle pageTitle="Produits" title="Liste de produit" />

      <CreateButton />

      <Card>
        <Card.Body>
          <Products />
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductList