import { Spinner, Table } from 'react-bootstrap'
import Error from '../../component/Message/Error';
import { Link } from 'react-router-dom';
import Paginate from '../../component/Pagination/Paginate';
import Filter from './Filter';
import { useDeleteMutation, useFetchAll } from './useProducts';
import { onDeleteData } from '../../Helper/sweetAlert';
import { capitalizeLetter } from '../../Helper/Helper';

function Products() {

  const { error, checkboxs, setCheckboxs, isError, isLoading, data, currentPage, setCurrentPage } = useFetchAll()

  const deleteMutation = useDeleteMutation();

  if (isError) return <Error error={error} />

  const onDelete = async (product) => await onDeleteData(product, deleteMutation);

  return (
    <>
      <Filter checkboxes={checkboxs} setCheckboxes={setCheckboxs} />

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
                          title="product-img" className="avatar-md" />
                      </td>
                      <td>
                        <h5 className="font-size-14 text-truncate">
                          <a href={product.route_detail} className="text-dark">
                            {capitalizeLetter(product?.name)}
                          </a>
                        </h5>
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
                      </td>
                    </tr>
                  ))
                }
              </>
          }
        </tbody>
      </Table>
      <br />
      <Paginate data={data?.products}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Products