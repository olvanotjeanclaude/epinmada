import { useState } from 'react'
import User from './User'
import { Col, Row, Spinner } from 'react-bootstrap'
import Paginate from '../../component/Pagination/Paginate';
import Error from '../../component/Message/Error';
import userService from '../../service/userService';
import { useQuery } from 'react-query';


function Users() {
    const [currentPage, setCurrentPage] = useState(1);

    const { data: users, error, isLoading } = useQuery({
        queryKey: [userService.name,currentPage],
        queryFn: () => userService.fetchAll(currentPage),
        keepPreviousData:true
    })

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
                setCurrentPage={setCurrentPage}
                 />
        </>
    )
}

export default Users;