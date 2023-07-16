import React from 'react'
import PageTitle from '../Layout/PageTitle'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button, Col, Form, Row } from 'react-bootstrap';
import useFetchConstants from '../../Hooks/useFetchConstants';
import { useMutation } from 'react-query';
import http from '../../Helper/makeRequest';
import { mapFormErrors } from '../../Helper/Helper';
import {  useNavigate } from 'react-router-dom'

export default function UserForm() {
    const navigate = useNavigate();
    
    const { user_types } = useFetchConstants();

    const schema = yup.object({
        type: yup.string().required('Selectionnez le rôle'),
        name: yup.string().required("le nom ne peut pas être vide"),
        surname: yup.string().required("le prenom ne peut pas être vide"),
        phone: yup.string().required("Téléphone ne peut pas être vide"),
        email: yup.string().email("Email invalide").required("Email ne peut pas être vide"),
        password: yup.string().required("le mot de passe ne peut pas être vide"),
        password_confirmation: yup.string().required('La confirmation du mot de passe est requise')
            .oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre'),
    }).required()

    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            type: "",
            name: "",
            surname: "",
            phone: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const mutation = useMutation(async (newUser) => {
        return await http.post("/users", newUser).catch(error => {
            if (error.response.status == 422) {
                const errors = mapFormErrors(error.response.data.errors);
                errors.forEach(({ name, type, message }) => {
                    setError(name, { type, message })
                });
            }
            throw "Error ocurred";
        });
    },{
        onSuccess:function({data}){
            navigate("/utilisateurs", {
                state: {
                    message:data
                }
            })
        }
    });

    const onSubmit = async (data) => {
        mutation.mutate(data);
    }

    return (
        <>
            <PageTitle pageTitle="Utilisateurs" title="Nouveau Utilisateur" />

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

                        <Button
                            // disabled={isDirty || !isValid}
                            type='submit'
                            className="btn btn-rounded btn-primary waves-effect waves-light float-end">
                            <i className="mdi mdi-content-save"></i> Enregistrer
                        </Button>
                    </div>
                </div>
            </Form>
        </>
    )
}
