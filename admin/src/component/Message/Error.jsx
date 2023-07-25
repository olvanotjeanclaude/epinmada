import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Error({ error }) {
    const navigate = useNavigate();
    return (
        <div className='text-danger'>
            <p>Erreur: {error}</p>
            <Button onClick={() => navigate(-1)}>Retourner</Button>
        </div>
    )
}

export default Error;