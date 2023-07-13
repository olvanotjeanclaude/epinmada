import React from 'react'
import PageTitle from '../Layout/PageTitle'
import { useForm } from "react-hook-form"
import { Col, Form, Row } from 'react-bootstrap';

export default function UserForm() {

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            name: "",
            surname: "",
            select: {},
        },
    });

    const { isDirty, isValid, errors } = formState;


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <PageTitle pageTitle="Utilisateurs" title="Nouveau Utilisateur" />

            <form autoComplete="disabled" onSubmit={handleSubmit(onSubmit)} className="needs-validation" method="post">
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-md-3 col-form-label">Rôle</label>
                            <div className="col-sm col-md">
                                <select className="form-select" name="type">
                                    <option defaultValue="">Rôle</option>
                                </select>
                            </div>
                        </div>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Nom</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("name", {
                                    required: "Tsy mentsy fenoina",
                                    maxLength: {
                                        value: "4",
                                        message: "maximum 4"
                                    }
                                })} isInvalid={errors.name ? true : false} />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.name?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Prenom</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("surname", { required: true })} isInvalid={false} />
                                <Form.Control.Feedback type="invalid">
                                    ...
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Téléphone</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("phone", {
                                    required: "fenoy ra ty",
                                    min: {
                                        value: 2,
                                        message: "min 2"
                                    }, max: {
                                        value: 4,
                                        message: "max 4"
                                    }
                                })} type='number' isInvalid={errors.phone ? true : false} />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.phone?.message}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Email</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("email")} type='email' isInvalid={false} />
                                <Form.Control.Feedback type="invalid">
                                    ...
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Mot De Passe</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control {...register("password")} type='password' isInvalid={false} />
                                <Form.Control.Feedback type="invalid">
                                    ...
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col sm={4} md={3}>
                                <Form.Label>Confirmez le mot de passe</Form.Label>
                            </Col>
                            <Col sm={true} md={true}>
                                <Form.Control  {...register("password")} type='password' isInvalid={false} />
                                <Form.Control.Feedback type="invalid">
                                    ...
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <button
                            // disabled={isDirty || !isValid}
                            className="btn btn-rounded btn-primary waves-effect waves-light float-end">
                            <i className="mdi mdi-content-save"></i> Enregistrer
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
