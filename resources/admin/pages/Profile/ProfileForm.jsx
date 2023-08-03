import { Box, Button, FormHelperText, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
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

const ProfileForm = () => {
    const toast = useRef();

    const queryClient = useQueryClient();

    const { isError, isLoading, error, data: profile } = useProfile();

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
        setValue("name", profile.name);
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
        <>
            <Toast ref={toast} />
            <PageTitle pageTitle="Profile" title="Modification du profile" />

            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
            >
                <Box>
                    <TextField
                        {...register("name")}
                        error={!!errors.name}
                        fullWidth label="Nom" variant="outlined" />
                    <FormHelperText disabled error>{errors.name?.message}</FormHelperText>
                </Box>
                <Box>
                    <TextField
                        {...register("surname")}
                        error={!!errors.surname}
                        fullWidth label="Prénom" variant="outlined" />
                    <FormHelperText disabled error>{errors.surname?.message}</FormHelperText>
                </Box>
                <Box>
                    <TextField
                        {...register("email")}
                        error={!!errors.email}
                        type='email'
                        fullWidth label="E-mail" variant="outlined" />
                    <FormHelperText disabled error>{errors.email?.message}</FormHelperText>
                </Box>
                <Box>
                    <TextField
                        {...register("phone")}
                        error={!!errors.phone}
                        fullWidth label="Téléphone" variant="outlined" />
                    <FormHelperText disabled error>{errors.phone?.message}</FormHelperText>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={profileMutation.isLoading}
                        endIcon={profileMutation.isLoading ? null : <SaveIcon />}
                    >
                        {profileMutation.isLoading ? 'Envoyen en cours...' : 'Enregister'}
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default ProfileForm;
