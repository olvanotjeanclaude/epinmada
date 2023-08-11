import React from 'react'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function PCreateButton() {
    return (
        <Link to='nouveau'>
            <Button size='small' className='p-button-rounded'>Nouveau</Button>
        </Link>
    )
}
