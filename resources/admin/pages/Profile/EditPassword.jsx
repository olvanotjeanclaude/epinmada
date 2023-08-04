import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Toast } from 'primereact/toast';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Submit from "../../component/Button/Submit";
import { useMutation } from "react-query";
import http from "../../Helper/makeRequest";
import { mapFormErrors } from "../../Helper/Helper";

const EditPassword = () => {
    const toast = useRef();

    const _updatePassword = async (data) => {
        return http.post("update-password", data)
            .then(res => res.data)
            .catch(e => { throw e.message });
    }

    const mutateProfile = useMutation({
        mutationFn: async (data) => await _updatePassword(data),
        mutationKey: "updateUser"
    });

    const schema = yup.object({
        current_password: yup.string().required("Entrer le mot de passe actuel"),
        password: yup.string().required("Entrer le mot de passe"),
        password_confirmation: yup.string().required("Confirmer le mot de passe"),
    }).required();

    const { register, handleSubmit, setError, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        mutateProfile.mutate(data, {
            onSuccess: (data) => {
                if (data.code == 422) {
                    const resErrors = mapFormErrors(data.errors);
                    resErrors.forEach(({ name, message }) => {
                        setError(name, { message })
                    });
                }

                if (data.code == 400) {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: data.message });
                }

                if (data.code == 200) {
                    toast.current.show({ severity: 'success', summary: 'Message', detail: data.message });
                    reset();
                }
            }
        });
    }

    return (
        <div className="card">
            <Toast ref={toast} />
            <div className="card-body">
                <h4 className="card-title mb-4">
                    Information Sur le mot de passe
                </h4>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="needs-validation">
                    <Form.Group className="mb-3">
                        <FloatingLabel controlId="current-password" id="current-password" label="Mot de passe actuel">
                            <Form.Control {...register("current_password")}
                                type="password" placeholder="Password"
                                isInvalid={!!errors.current_password} />
                            <Form.Control.Feedback type="invalid">{errors.current_password?.message}</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FloatingLabel controlId="password" label="Nouveau Mot de passe">
                            <Form.Control {...register("password")}
                                type="password" placeholder="Password"
                                isInvalid={!!errors.password} />
                            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FloatingLabel controlId="password-confirmation" label="Confirmez le mot de passe">
                            <Form.Control {...register("password_confirmation")}
                                type="password" placeholder="Password"
                                isInvalid={!!errors.password_confirmation} />
                            <Form.Control.Feedback type="invalid">{errors.password_confirmation?.message}</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Submit isLoading={mutateProfile.isLoading} />
                </form>
            </div>
        </div>
    );
};

export default EditPassword;
