import { Spinner, Table } from 'react-bootstrap'
import Error from '../../component/Message/Error';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { useDeleteMutation, useFetchAll } from './useProducts';
import { onDeleteData } from '../../Helper/sweetAlert';
import { capitalizeLetter } from '../../Helper/Helper';
import MUIPagination from '@/common/component/MUIPagination';

function Products() {

  const { error, setCheckboxs, isError, isLoading, data, query, setQuery, currentPage, setCurrentPage } = useFetchAll()

  const deleteMutation = useDeleteMutation();

  if (isError) return <Error error={error} />

  const onDelete = async (product) => await onDeleteData(product, deleteMutation);

  return (
    <>
      <Filter data={data}
        isLoading={isLoading}
        query={query} setQuery={setQuery}
        setCheckboxes={setCheckboxs} />

      <Table responsive striped className="table align-middle mb-0 table-nowrap">
        <thead className="table-light">
          <tr>
            <th>Produit</th>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Prix</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading ? <tr><td colSpan={4}><Spinner /></td></tr>
              : <>
                {
                  data.products.data?.map(product => (
                    <tr key={product.unique_id}>
                      <td>
                        <img src={`${product.image_url}`} alt="product-img"
                          title="product-img" className="avatar-sm" />
                      </td>
                      <td>
                        <a href={product.route_detail} className="text-dark font-weight-bold">
                          {capitalizeLetter(product?.name)}
                        </a>
                      </td>
                      <td>{product.category?.name}</td>
                      <td>
                        {product.formatted_price}
                      </td>
                      <td>
                        <Link to={`${product.unique_id}`} className="action-icon text-warning">
                          <i className="mdi mdi-eye font-size-18"></i>
                        </Link>
                        <Link role='button' onClick={() => onDelete(product)} className="ms-2 action-icon text-danger">
                          <i className="mdi mdi-trash-can font-size-18"></i>
                        </Link>
                        <Link to={`${product.unique_id}/edit`} className="ms-2 action-icon text-success">
                          <i className="mdi mdi-pencil font-size-18"></i>
                        </Link>
                      </td>
                    </tr>
                  ))
                }
              </>
          }
        </tbody>
      </Table>
      <br />
      <MUIPagination data={data?.products} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  )
}

export default Products