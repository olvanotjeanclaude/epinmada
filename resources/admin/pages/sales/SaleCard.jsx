import OrderStatus from '@/common/component/OrderStatus';
import { computeAmount } from '@/common/helper';
import { Avatar } from '@mui/material';
import React from 'react'
import {  Card, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';

export default function SaleCard({ sale }) {
    const { customer } = sale;

    return (
        <Link to={sale.unique_id}>
            <Card className='m-0'>
                <Card.Body>
                    <div className="d-flex  gap-2">
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                        <div style={{ maxWidth: "15rem" }}>
                            <h5 className="mb-1 font-size-15 text-truncate">{customer?.name}</h5>
                            <Stack>
                                <span className="text-muted">{customer?.email}</span>
                                <span className="text-muted">{customer?.phone??"-"}</span>
                            </Stack>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div className="d-flex gap-2">
                            <span className="d-block text-primary text-decoration-underline mb-2">N<sup>0</sup>{sale.unique_id}</span>

                            <OrderStatus namespace="admin" text={sale.statusText} status={sale.status} />
                        </div>

                        <div className="d-flex justify-content-between flex-wrap gap-2  align-items-center">
                            <ul className="list-inline  m-0">
                                <li className="list-inline-item me-3">
                                    <h5 className="font-size-14 m-0 p-0">
                                        <i className="bx bx-money me-1 text-muted"></i>
                                        {computeAmount(sale.orders)}
                                    </h5>
                                </li>
                                <li className="list-inline-item date">
                                    <h5 className="font-size-14 m-0 p-0">
                                        <i className="bx bx-calendar me-1 text-muted"></i>
                                        {sale.created_at}
                                    </h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}
