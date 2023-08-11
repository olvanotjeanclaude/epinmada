import { useEffect, useState } from 'react'
import User from './User'
import { Col, Form, Row, Spinner } from 'react-bootstrap'
import Paginate from '../../component/Pagination/Paginate';
import Error from '../../component/Message/Error';
import userService from '../../service/userService';
import { useQuery } from 'react-query';
import { InputText } from 'primereact/inputtext';
import PCreateButton from '../../component/Button/PCreateButton';
import useFetchConstants from '../../Hooks/useFetchConstants';
import { capitalizeLetter } from '../../Helper/Helper';

function Users() {
    const [currentPage, setCurrentPage] = useState(1);

    const { user_types } = useFetchConstants();
    const [checkboxs, setCheckboxs] = useState();
    const [query, setQuery] = useState("");

    const { data: users, error, isLoading } = useQuery({
        queryKey: [userService.name, currentPage, query, checkboxs],
        queryFn: () => userService.fetchAll(currentPage, { query, checkboxs }),
        keepPreviousData: true
    });

    const checkboxOnChange = (e) => {
        setCheckboxs(prev => ({
            ...prev,
            [e.target.value]: e.target.checked
        }));
    }

    if (error) return <Error error={error} />

    return (
        isLoading ? <Spinner /> :
            <>
                <div className="d-flex align-items-center flex-wrap mb-2 justify-content-between">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher..." />
                    </span>

                    <div className='d-flex gap-2'>
                        {
                            user_types && Object.entries(user_types)
                                .filter(([type, value]) => type != "client")
                                .map(([key, value]) => (
                                    <Form.Check
                                        key={key}
                                        name={key}
                                        type="checkbox"
                                        label={capitalizeLetter(key)}
                                        onChange={checkboxOnChange}
                                        style={{ fontSize: "1rem" }}
                                        value={value}
                                    />
                                ))
                        }
                    </div>

                    <PCreateButton />
                </div>
                <Row>
                    {
                        users?.data?.map(user => (
                            <Col sm={6} md={4} key={user.id}>
                                <User user={user} query={query} />
                            </Col>
                        ))
                    }
                </Row>

                <Paginate data={users}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </>
    );
}

export default Users;