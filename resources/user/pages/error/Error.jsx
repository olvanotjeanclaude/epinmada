import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Error({ error }) {
    const navigate = useNavigate();
    return (
        <>
            <Typography variant="h4" color="error">{error}</Typography>
            <Button variant='contained' sx={{mt:2}} onClick={() => navigate(-1)}>Retourner</Button>
        </>
    )
}
