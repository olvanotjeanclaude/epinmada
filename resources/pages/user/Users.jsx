import React from 'react'
import User from './User'
import { Col, Row, Spinner } from 'react-bootstrap'
import useQueryApi from '../../Hooks/useQueryApi';
import Paginate from '../../component/Pagination/Paginate';
import Error from '../../component/Message/Error';

function Users() {
    const {
        currentPage,
        setCurrentPage,
        fetchData,
    } = useQueryApi("users");

    const { data: users, isLoading, error } = fetchData();

    if (error) {
        return <Error error={error} />
    }

    return (
        <>
            {isLoading && <Spinner />}

            <Row>
                {
                    users?.data?.map(user => (
                        <Col sm={6} xl={3} key={user.id}>
                            <User user={user} />
                        </Col>
                    ))
                }
            </Row>

            <Paginate data={users}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </>
    )
}

export default Users;