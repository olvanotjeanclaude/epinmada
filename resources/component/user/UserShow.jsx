import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useQueryApi from '../../Hooks/useQueryApi';
import { Button, Card, Spinner, Table } from 'react-bootstrap';
import Error from '../Message/Error';
import PageTitle from '../Layout/PageTitle';
import Icon from '@mdi/react';
import { mdiAccountEdit } from '@mdi/js';

function UserShow() {
    const { id } = useParams();
    const { showData } = useQueryApi("users");

    const { data: user, isLoading, error } = showData(id);

    if (isLoading) {
        return <Spinner />
    }

    if (!user) {
        return <Error error={error} />;
    }

    return (
        <div className='user-info'>
            <PageTitle pageTitle="Utilisateurs" title="Detail d'utilisateur" />

            {
                user &&
                <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-between mb-2">
                            <h4 className="card-title mb-4">Informations personnelles</h4>
                            <Link to="edit" className='btn btn-success'>
                                <Icon path={mdiAccountEdit} size={1} />
                            </Link>
                        </div>
                        <div className="table-responsive">
                            <Table striped className="table table-nowrap mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row">Nom</th>
                                        <td>{user.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Prénom</th>
                                        <td>{user.surname}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Téléphone</th>
                                        <td>{user.phone}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E-mail</th>
                                        <td>{user.email}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}

export default UserShow