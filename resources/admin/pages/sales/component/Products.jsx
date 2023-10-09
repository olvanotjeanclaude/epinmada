import React from 'react'
import { useFetchAll } from '../../product/useProducts'
import Error from '../../../component/Message/Error';
import { Spinner } from 'react-bootstrap';
import Product from './Product';
import Filter from '../../product/Filter';

export default function Products() {
    const { data, isLoading, error, isError, query, setQuery,currentPage, setCurrentPage, setCheckboxs } = useFetchAll();

    if (isError) return <Error error={error} />

    if (isLoading) return <Spinner />

    const products = data.products.data;

    return (
        <>
            <Filter data={data}
                isLoading={isLoading}
                query={query} setQuery={setQuery}
                setCheckboxes={setCheckboxs} />

            <div className="listingProduct" style={{minHeight:"340px"}}>
                {products.map(product => <Product key={product.unique_id} product={product} />)}
            </div>


            <MUIPagination data={data.products} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </>
    );
}
