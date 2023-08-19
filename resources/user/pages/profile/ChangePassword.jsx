import { Alert, Box, Button, Snackbar, Stack, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState } from 'react'
import usePassword from '../../../common/hook/usePassword';

export default function ChangePassword() {
    const [snakbarOpen, setSnackbarOpen] = useState(false);
    const [message, setMessage] = useState("");

    const { register, reset, formState: { errors, isValid }, passwordMutation, handleSubmit } = usePassword();

    const onSubmit = (data) => {
        passwordMutation.mutate(data, {
            onSuccess(response) {
                setMessage(response.message);

                if (response.code == 422) {
                    setMessage(response.errors.password[0]);
                }

                if (response.code == 200) {
                    reset();
                }
                setSnackbarOpen(true);
            },
            onerror(e) {
                console.log(e);
            },
        });
    }

    return (
        <Box mt={2} component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate autoComplete="off" >
            <Snackbar
                autoHideDuration={5000}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={snakbarOpen}
                onClose={() => setSnackbarOpen(false)}
                message="I love snacks"
            >
                <Alert variant='filled'
                    onClose={() => setSnackbarOpen(false)}
                    severity={passwordMutation.data?.type} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            <Stack gap={2}>
                <TextField
                    id='password' type='password'
                    {...register("password")}
                    role='presentation'
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    label="Mot De Passe" required variant="outlined" />

                <TextField id='confirmPassword'
                    autoComplete='nope' type='password'
                    {...register("password_confirmation")}
                    label="Confirmez le mot de passe"
                    error={!!errors.password_confirmation}
                    helperText={errors.password_confirmation?.message}
                    variant="outlined" />
            </Stack>

            <Button disabled={passwordMutation.isLoading || !isValid}
                sx={{ float: "right", mt: 2 }} variant="contained" type='submit'
                startIcon={<SaveIcon />}>
                Mettre A Jour
            </Button>
        </Box>
    );
}
