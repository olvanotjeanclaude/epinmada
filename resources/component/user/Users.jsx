import React, { useState } from 'react'
import User from './User'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query';
import http from '../../Helper/makeRequest';
import { arrayRange } from '../../Helper/Helper';
import Paginate from '../Pagination/Paginate';

function Users() {
    const [currentPage, setCurrentPage] = useState(1);

    const fetchUsers = async () => {
        return (await http.get(`/users?page=${currentPage}`)).data;
    };

    const { data: users, isLoading, isError } = useQuery({
        queryKey: ["posts", currentPage],
        queryFn: fetchUsers,
        keepPreviousData: true
    });

    const links = arrayRange(1, users?.links?.length - 2);

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

            <Paginate links={links}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </>
    )
}

export default Users;