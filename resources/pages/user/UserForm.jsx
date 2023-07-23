import React, { useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import useQueryApi from '../../Hooks/useQueryApi'
import useUserForm from '../../Hooks/useUserForm'
import { useParams } from 'react-router-dom';
import Error from '../../component/Message/Error';
import PageTitle from '../../component/Layout/PageTitle';
import { Toast } from 'primereact/toast';
import {  mapFormErrors } from '../../Helper/Helper';

export default function UserForm() {
    const { id } = useParams();

    const {
        addMutation,
        updateMutation,
        showData
    } = useQueryApi("users", "/utilisateurs");

    const toast = useRef(null);

    const action = id ? "update" : "store";

    const response = id == undefined ? null : showData(id);

    if (response?.error) {
        return <Error error={response.error} />
    }

    const {
        register,
        handleSubmit,
        errors,
        user_types,
        setError,
    } = useUserForm(response?.data);

    const onSubmit = async (data) => {
        const onSuccess = (data) => {
            toast.current.show({
                severity: data.type,
                summary: data.message,
            });

            if (data.code == 422) {
                const errors = mapFormErrors(data.errors);

                errors.forEach(({ name, type, message }) => {
                    setError(name, { type, message })
                });
            }
        };

        const onError = (error) => {
            toast.current.show({
                severity: "error",
                summary: error,
            });
        };

        switch (action) {
            case "store":
                addMutation.mutate(data, { onError, onSuccess });
                break;

            case "update":
                updateMutation.mutate((data), { onError, onSuccess });
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Toast ref={toast}></Toast>

            <PageTitle pageTitle="Utilisateurs" title={`${action == "store" ? "Nouveau" : "Modification d'"} utilisateur`} />

            <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="needs-validation" method="post">

                <div className="card">
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-md-3 col-form-label">Rôle</label>
                            <div className="col-sm col-md">
                                <Form.Select {...register("type")} isInvalid={!!errors.type}>
                                    <option value="">Rôle</option>
                                    {
                                        Object.entries(user_types ?? {}).map(([key, value]) => (
                                            <option value={value} key={key}>{key}</option>
                                        ))
                                    }
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.type?.message}
                                </Form.Control.Feedback>
                            </div>
                        </div>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Nom</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("name")} isInvalid={!!errors.name} />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.name?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Prenom</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("surname")} isInvalid={!!errors.surname} />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.surname?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Téléphone</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("phone")} type='phone' isInvalid={!!errors.phone} />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Email</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("email")} isInvalid={!!errors.email} type='email' />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.email?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        {
                            action == "store" &&
                            <>
                                <Row className='mb-3'>
                                    <Col sm={4} md={3}>
                                        <Form.Label>Mot De Passe</Form.Label>
                                    </Col>
                                    <Col sm={true} md={true}>
                                        <Form.Control {...register("password")} isInvalid={!!errors.password} type='password' />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.password?.message}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>

                                <Row className='mb-3'>
                                    <Col sm={4} md={3}>
                                        <Form.Label>Confirmez le mot de passe</Form.Label>
                                    </Col>
                                    <Col sm={true} md={true}>
                                        <Form.Control  {...register("password_confirmation")}
                                            type='password'
                                            isInvalid={!!errors.password_confirmation} />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.password_confirmation?.message}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>
                            </>
                        }

                        <Button
                            disabled={addMutation.isLoading || updateMutation.isLoading}
                            type='submit'
                            className="btn btn-rounded btn-primary waves-effect waves-light float-end">
                            <i className="mdi mdi-content-save"></i>
                            {
                                (addMutation.isLoading || updateMutation.isLoading) ?
                                    "Chargement..." : "Enregister"
                            }
                        </Button>
                    </div>
                </div>
            </Form>
        </>
    )
}
