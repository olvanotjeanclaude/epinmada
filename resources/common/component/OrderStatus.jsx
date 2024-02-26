import { Chip } from '@mui/material';
import React from 'react'
import { Badge } from 'react-bootstrap'
import { capitalizeLetter } from '../helper';

export default function OrderStatus({ namespace, status, text }) {
    let badge = <></>;
    let bg, color;


    switch (capitalizeLetter(status)) {
        case "Paid":
            bg = color = "success";
            break;
        case "Completed":
            bg = color = "success";
                text="Payé";
            break;
        case "Cancelled":
            bg = "danger";
            color = "error";
            break;
        case "Failed":
            bg = "danger";
            color = "error";
            text = "Erreur";
            break;
        case "Pending":
            bg = color = "primary";
            break;
        default:
            bg = color = "primary";
            break;
    }

    if (namespace == "admin") {
        badge = <Badge bg={bg}>{capitalizeLetter(text)}</Badge>;
    }
    else {
        badge = <Chip label={capitalizeLetter(text)} color={color} />;
    }

    return (<div>{badge}</div>);
}
