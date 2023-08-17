import { useState } from 'react'
import User from './User'
import { Col, Row, Spinner } from 'react-bootstrap'
import Paginate from '../../component/Pagination/Paginate';
import Error from '../../component/Message/Error';
import userService from '../../service/userService';
import { useQuery } from 'react-query';
import { InputText } from 'primereact/inputtext';
import PCreateButton from '../../component/Button/PCreateButton';
import useFetchConstants from '../../Hooks/useFetchConstants';
import { capitalizeLetter } from '../../Helper/Helper';
import { Checkbox, FormControlLabel, Stack } from '@mui/material';

function Users() {
    const [currentPage, setCurrentPage] = useState(1);
    const { user_types } = useFetchConstants();
    const [checkboxs, setCheckboxs] = useState();
    const [query, setQuery] = useState("");
    const [team, setTeam] = useState(false);

    const { data: users, error, isLoading } = useQuery({
        queryKey: [userService.name, currentPage, query, checkboxs, team],
        queryFn: () => userService.fetchAll(currentPage, { query, checkboxs, team }),
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
                <div className="d-flex align-items-center flex-wrap mb-3 gap-1  justify-content-between">
                    <span className="p-input-icon-left flex-grow-1 flex-xl-grow-0">
                        <i className="pi pi-search" />
                        <InputText
                            value={query} onChange={(e) => setQuery(e.target.value)}
                            placeholder="Rechercher..." />
                    </span>

                    <Stack flexDirection="row" alignItems="center">
                        {
                            user_types && Object.entries(user_types)
                                .filter(([type, value]) => type != "client")
                                .map(([key, value]) => (
                                    <FormControlLabel
                                        sx={{ mb: 0 }}
                                        control={<Checkbox />}
                                        key={key}
                                        name={key}
                                        type="checkbox"
                                        label={capitalizeLetter(key)}
                                        onChange={checkboxOnChange}

                                        value={value}
                                    />
                                ))
                        }

                        <FormControlLabel
                            sx={{ mb: 0 }}
                            control={<Checkbox />}
                            name='team'
                            label="Équipe"
                            type="checkbox"
                            onChange={e => setTeam(e.target.checked)}
                            checked={team}
                        />
                    </Stack>

                    <PCreateButton />
                </div>

                <Row style={{ minHeight: "350px" }}>
                    {
                        users?.data?.map(user => (
                            <Col sm={6} md={4} xl={3} key={user.id}>
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