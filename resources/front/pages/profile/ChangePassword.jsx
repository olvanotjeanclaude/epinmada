import { Box, Button, Stack, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React from 'react'

export default function ChangePassword() {
    return (
        <Box mt={2} component="form" noValidate autoComplete="off" >
            <Stack gap={2}>
                <TextField autoComplete='on' type='password' label="Mot De Passe" required variant="outlined" />
                <TextField autoComplete='on' type='password' label="Confirmez le mot de passe" required variant="outlined" />
            </Stack>

            <Button sx={{ float: "right", mt: 2 }} variant="contained" type='submit' startIcon={<SaveIcon />}>
                Mettre A Jour
            </Button>
        </Box>
    );
}
