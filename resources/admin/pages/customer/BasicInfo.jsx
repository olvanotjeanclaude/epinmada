import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { capitalizeLetter } from '../../Helper/Helper';
import CardRow from '../../component/card/CardRow';

import avatar from "../../assets/images/users/avatar-7.jpg";
import { LinearProgress } from '@mui/material';

export default function BasicInfo({ customer, isLoading }) {

    if (isLoading) return <LinearProgress sx={{ mb: 2 }} />;

    return (
        <>
            <h4>Information De Base</h4>

            <Card>
                <Card.Body>
                    <Row>
                        <Col sm={4} md={3}>
                            <Image src={customer.image ? customer.image : avatar} height={110} roundedCircle />
                        </Col>
                        <Col sm={8} md={9}>
                            <div className="d-flex flex-column gap-2">
                                <CardRow label="Nom" value={capitalizeLetter(customer.name)} />
                                <CardRow label="Prénom" value={capitalizeLetter(customer.surname)} />
                                <CardRow label="Email" value={customer.email?.toLowerCase()} />
                                <CardRow label="Téléphone" value={customer.phone ?? "-"} />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
