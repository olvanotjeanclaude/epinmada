import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function InvoiceCard() {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between gap-1 align-items-center">
                    <div className="avatar-sm">
                        <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16">
                            M
                        </span>
                    </div>
                    <div>
                        <h5 className="mb-1 font-size-15 text-truncate">Marion Burton</h5>
                        <a className="text-muted">olvanotjcs@gmail.com</a>
                    </div>
                </div>

                <div className='mt-2'>
                    <a className="d-block text-primary text-decoration-underline mb-2">Invoice #14251</a>
                    <h5 className="text-truncate  mb-3">Skote Dashboard UI</h5>

                    <div className="d-flex justify-content-between flex-wrap bg-blak align-items-center">
                        <ul className="list-inline  m-0">
                            <li className="list-inline-item me-3">
                                <h5 className="font-size-14 m-0 p-0">
                                    <i className="bx bx-money me-1 text-muted"></i>
                                    $1455
                                </h5>
                            </li>

                        
                            <li className="list-inline-item date">
                            <h5 className="font-size-14 m-0 p-0">
                                    <i className="bx bx-calendar me-1 text-muted"></i>
                                    10 Oct, 19
                                </h5>
                            </li>
                        </ul>

                        <div className='d-flex gap-1'>
                            <Link to="3" className='btn btn-warning btn-sm'>
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
