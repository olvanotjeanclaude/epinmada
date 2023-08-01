import { Link, useParams } from 'react-router-dom'
import { Card, Spinner, Table } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiAccountEdit } from '@mdi/js';
import Error from '../../component/Message/Error';
import PageTitle from '../../component/Layout/PageTitle';
import { useQuery } from 'react-query';
import userService from '../../service/userService';

function UserShow() {
    const { id } = useParams();

    const { data: user, isLoading, error } = useQuery({
        queryKey: [id],
        queryFn: async () => await userService.show(id)
    })

    if (error) {
        return <Error error={error} />;
    }

    return (
        <div className='user-info'>
            <PageTitle pageTitle="Utilisateurs" title="Detail d'utilisateur" />

            {
                isLoading ? <Spinner /> :
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