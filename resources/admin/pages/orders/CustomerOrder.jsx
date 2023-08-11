import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { today } from '../../Helper/date'
import { Link } from 'react-router-dom'

export default function CustomerOrder({ order }) {
    return (
        <Card>
            <Card.Body className='pb-0'>
                <div className="d-flex flex-wrap gap-2">
                    <div className="flex-shrink-0">
                        <Image src="https://placehold.co/600x400/png" alt="" height="50" />
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                        <h5 className="text-truncate font-size-15"><a  className="text-dark">
                            New admin Design</a>
                        </h5>
                        <p className="text-muted mb-4">NETFLIX</p>
                    </div>

                    <h4>20 000ar</h4>
                </div>

            </Card.Body>
            <div className="px-4 py-3 border-top d-flex justify-content-between align-items-center">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item me-3">
                        <span className="badge bg-success">Completed</span>
                    </li>
                    <li className="list-inline-item me-3">
                        <i className="bx bx-calendar me-1"></i>
                        {today()}
                    </li>
                </ul>

                <div className='d-flex gap-1'>
                    <Link to="/commandes/2/edit" title='Voir'>
                        <Button variant='warning' size='sm'>
                            <i className='pi pi-eye'></i>
                        </Button>
                    </Link>
                </div>
            </div>

        </Card>
    )
}
