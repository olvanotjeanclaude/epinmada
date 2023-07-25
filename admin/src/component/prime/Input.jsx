import React from 'react'
import { capitalizeLetter } from "../../Helper/Helper";
import { FloatingLabel, Form } from 'react-bootstrap';

function Input({ label, type, id, name, placeholder, value }) {
    return (
        <FloatingLabel label={capitalizeLetter(label)} controlId={id}>
            <Form.Control type={type ?? "text"} placeholder={placeholder} />
        </FloatingLabel>
    )
}

export default Input