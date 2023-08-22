import { Chip } from '@mui/material';
import React from 'react'
import { Badge } from 'react-bootstrap'

export default function OrderStatus({ namespace, status }) {
    let badge = <></>;


    if (namespace == "admin") {
        badge = <Badge bg='primary'>{status}</Badge>;
    }
    else {
        badge = <Chip label={status} color="primary" />;
    }
 
    return (<div>{badge}</div>);
}
