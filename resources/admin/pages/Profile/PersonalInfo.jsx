import React from "react";
import {  Col, Row, Spinner, Stack } from "react-bootstrap";
import { useQuery } from "react-query";
import http from "../../Helper/makeRequest";
import Error from "../../component/Message/Error";
import EditPassword from "./EditPassword";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

const PersonalInfo = () => {
    const {
        data: profile,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryFn: async () =>
            await http.get("/user")
                .then((res) => res.data)
                .catch((err) => new Error(err.message)),
        queryKey: "profile",
    });

    if (isError) return <Error error={error} />;

    if (isLoading) return <Spinner />;

    return (
        <Row>
            <Col sm={6} md={7}>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex mb-4 justify-content-between align-items-center">
                            <h4 className="card-title">
                                Informations personnelles
                            </h4>

                            <Link to="edit" variant='success' className="waves-effectwaves-light">
                               <EditIcon />
                            </Link>
                        </div>

                        <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"}
                            className="flex align-items-center justify-content-center mr-2" size="xlarge" />

                        <div className="table-responsive">
                            <table className="table table-nowrap mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row">Nom</th>
                                        <td>{profile.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Prenom</th>
                                        <td>{profile.surname}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E-mail</th>
                                        <td>{profile.email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Telephone</th>
                                        <td>{profile.phone}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Col>
            <Col sm={6} md={5}>
                <EditPassword />
            </Col>
        </Row>
    );
};

export default PersonalInfo;
