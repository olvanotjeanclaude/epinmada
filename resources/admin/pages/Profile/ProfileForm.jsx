import React, { useRef } from 'react';
import PageTitle from '../../component/Layout/PageTitle';
import useProfile from './useProfile';
import Error from '../../component/Message/Error';
import { useForm } from 'react-hook-form';
import { string, object } from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import useProfileMutation from './useProfileMutation';
import { useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { useQueryClient } from 'react-query';
import { mapFormErrors } from '../../Helper/Helper';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Button } from 'primereact/button';

const ProfileForm = () => {
    const toast = useRef();

    const queryClient = useQueryClient();

    const { isError, error, data: profile } = useProfile();

    const profileMutation = useProfileMutation();


    const schema = object({
        name: string().required("Le nom ne peut pas être vide"),
        surname: string().required("Le prénom ne peut pas être vide"),
        email: string().email("Email invalide").required("Email ne peut pas être vide"),
        phone: string().required("Le téléphone ne peut pas être vide"),
    }).required();


    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            phone: "",
        }
    });

    useEffect(() => {
        setValue("name", profile?.name);
        setValue("surname", profile?.surname);
        setValue("phone", profile?.phone);
        setValue("email", profile?.email);
    }, [profile])

    const onSubmit = (data) => {
        profileMutation.mutate(data, {
            onSuccess: (data) => {
                if (data.code == 422) {
                    mapFormErrors(data.errors)
                        .forEach(({ name, type, message }) => setError(name, { message }));
                }

                if (data.code == 200) {
                    toast.current.show({
                        severity: data.type,
                        summary: data.message,
                    });
                    queryClient.invalidateQueries("user")
                }
            },
        }
        );
    }

    if (isError) return <Error error={error.message} />

    return (
        <Form className='needs-validation' onSubmit={handleSubmit(onSubmit)} noValidate>

            <Toast ref={toast} />
            <PageTitle pageTitle="Profile" title="Modification du profile" />

            <Form.Group className="mb-3">
                <FloatingLabel controlId="name" label="Nom">
                    <Form.Control {...register("name")}
                        type="text" placeholder="Nom"
                        isInvalid={!!errors.name} />
                    <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="surname" label="Prénom">
                    <Form.Control {...register("surname")}
                        type="text" placeholder="Prénom"
                        isInvalid={!!errors.surname} />
                    <Form.Control.Feedback type="invalid">{errors.surname?.message}</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="phone" label="Téléphone">
                    <Form.Control {...register("phone")}
                        type="phone" placeholder="Téléphone"
                        isInvalid={!!errors.phone} />
                    <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="email" label="Email">
                    <Form.Control {...register("email")}
                        type="email" placeholder="Email"
                        isInvalid={!!errors.email} />
                    <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

        <div className="d-flex justify-content-end">
            <Button size='small' label="Envoyer"
             icon="pi pi-check" loading={profileMutation.isLoading} />
        </div>
        </Form>
    );
}

export default ProfileForm;
