import { Chip } from '@mui/material';
import React from 'react'
import { Badge } from 'react-bootstrap'
import { capitalizeLetter } from '../helper';

export default function OrderStatus({ namespace, status }) {
    let badge = <></>;
    let bg;
    
    switch (capitalizeLetter(status)) {
        case "Paid":
            bg ="success";
            break;
        case "Cancelled":
            bg ="danger";
            break;
        case "Pending":
            bg ="primary";
            break;
        default:
            break;
    }

    if (namespace == "admin") {
        badge = <Badge bg={bg}>{capitalizeLetter(status)}</Badge>;
    }
    else {
        badge = <Chip label={capitalizeLetter(status)} color="primary" />;
    }
 
    return (<div>{badge}</div>);
}
