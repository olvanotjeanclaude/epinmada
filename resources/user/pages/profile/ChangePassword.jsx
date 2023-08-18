import { Box, Button, Snackbar, Stack, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState } from 'react'

export default function ChangePassword() {
    const [snakbarOpen, setSnackbarOpen] = useState(false);
    const [severity, setSeverity] = useState("success");

    const updatePassword = (e) => {
        e.preventDefault();
        setSnackbarOpen(true);
    }
    return (
        <Box mt={2} component="form"
            onSubmit={updatePassword}
            noValidate autoComplete="off" >
            <Snackbar
                autoHideDuration={5000}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={snakbarOpen}
                onClose={() => setSnackbarOpen(false)}
                message="I love snacks"
            />
            <Stack gap={2}>
                <TextField
                    id='password' type='password'
                    role='presentation'
                    label="Mot De Passe" required variant="outlined" />

                <TextField id='confirmPassword'
                    autoComplete='nope' type='password'
                    label="Confirmez le mot de passe" required variant="outlined" />
            </Stack>

            <Button sx={{ float: "right", mt: 2 }} variant="contained" type='submit'
                startIcon={<SaveIcon />}>
                Mettre A Jour
            </Button>
        </Box>
    );
}
