import { AddCircle } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function PCreateButton() {
    return (
        <Link to='nouveau' className=''>
            <Button startIcon={<AddCircle />} size='small' variant='contained'>Nouveau</Button>
        </Link>
    )
}
