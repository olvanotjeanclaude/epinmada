import React from 'react'
import PageTitle from '../Layout/PageTitle'
import { useForm } from "react-hook-form"
import { Col, Form, Row } from 'react-bootstrap';
import useFetchConstants from '../../Hooks/useFetchConstants';
import { useMutation } from 'react-query';
import http from '../../Helper/makeRequest';
import { mapErrors } from '../../Helper/Helper';
export default function UserForm() {

    const { register, handleSubmit, setError, formState } = useForm({
        defaultValues: {
            name: "",
            surname: "",
            phone: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const { user_types } = useFetchConstants();

    const { errors } = formState;

    const mutation = useMutation(async (newUser) => {
        return await http.post("/users", newUser).catch(e => {
            throw e.response.data.errors;
        });
    },
        {
            onError: (error) => {
                const test = mapErrors(error, setError);
            }
        }
    );

    const onSubmit = (data) => {
        mutation.mutate(data);
        // console.log(errors)
    }

    return (
        <>
            <PageTitle pageTitle="Utilisateurs" title="Nouveau Utilisateur" />


            <Form autoComplete="disabled" onSubmit={handleSubmit(onSubmit)} className="needs-validation" method="post">
                {
                    JSON.stringify(errors)
                }
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-md-3 col-form-label">Rôle</label>
                            <div className="col-sm col-md">
                                <select className="form-select" {...register("type")}>
                                    <option value="">Rôle</option>
                                    {
                                        Object.entries(user_types ?? {}).map(([key, value]) => (
                                            <option value={value} key={key}>{key}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Nom</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("name")} isInvalid={errors.name ? true : false} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Prenom</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("surname")} isInvalid={errors.surname ? true : false} />
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Téléphone</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("phone")} type='phone' isInvalid={errors.phone ? true : false} />
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Email</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("email")} isInvalid={errors.email ? true : false} type='email' />
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Mot De Passe</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("password")} isInvalid={errors.password ? true : false} type='password' />
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Confirmez le mot de passe</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control  {...register("password_confirmation")}
                                    type='password'
                                    isInvalid={errors.password_confirmation ? true : false} />
                            </Col>
                        </Row>

                        <button
                            // disabled={isDirty || !isValid}
                            type='submit'
                            className="btn btn-rounded btn-primary waves-effect waves-light float-end">
                            <i className="mdi mdi-content-save"></i> Enregistrer
                        </button>
                    </div>
                </div>
            </Form>
        </>
    )
}
