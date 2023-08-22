import OrderStatus from '@/common/component/OrderStatus';
import { computeAmount, formatDateTime } from '@/common/helper';
import { Avatar } from '@mui/material';
import React from 'react'
import { Button, Card, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';

export default function InvoiceCard({ sale }) {
    const { customer } = sale;
    return (
        <Card>
            <Card.Body>
                <div className="d-flex  gap-2">
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                    <div style={{ maxWidth: "15rem" }}>
                        <h5 className="mb-1 font-size-15 text-truncate">{customer.name}</h5>
                        <Stack>
                            <a className="text-muted">{customer.email}</a>
                            <a className="text-muted">{customer.phone}</a>
                        </Stack>
                    </div>
                </div>

                <div className='mt-2'>
                    <div className="d-flex gap-2">
                        <a className="d-block text-primary text-decoration-underline mb-2">N<sup>0</sup>{sale.unique_id}</a>

                        <OrderStatus namespace="admin" status={sale.status} />
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
                                    {formatDateTime(sale.created_at)}
                                </h5>
                            </li>
                        </ul>

                        <div className='d-flex gap-1'>
                            <Link to={sale.unique_id} className='btn btn-warning btn-sm'>
                                Voir
                            </Link>
                            <Button className='btn btn-danger btn-sm'>
                                Annuler
                            </Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
