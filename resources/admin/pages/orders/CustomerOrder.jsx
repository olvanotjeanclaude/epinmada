import React from 'react'
import { Button, Card, Image, Stack } from 'react-bootstrap'
import { today } from '../../Helper/date'
import { Link, useNavigate } from 'react-router-dom'
import { capitalizeLetter } from '@/admin/Helper/Helper';
import { formatDateTime } from '@/common/helper';
import OrderStatus from '@/common/component/OrderStatus';
import Typography from '@mui/material/Typography'

export default function CustomerOrder({ order }) {
    const { product, sale } = order;
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/ventes/${sale.unique_id}`)} role='button'>
            <Card.Body className='pb-0'>
                <div className="d-flex flex-wrap gap-2">
                    <div className="flex-shrink-0">
                        <Image src={product.image_url} alt={product.name} width="50" height="50" />
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                        <h4 className="text-truncate font-size-17">
                            <a className="text-dark">{capitalizeLetter(product.name)}</a>
                        </h4>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className="text-muted">{capitalizeLetter(product.category.name)}</h6>
                            <h6>{order.formattedSubAmount ?? "0 Ariary"}</h6>
                            {/* <Typography variant="body1">{order.formattedSubAmount ?? "0 Ariary"}</Typography> */}
                        </div>
                    </div>
                </div>

            </Card.Body>
            <div className="px-4 py-3 border-top d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2'>
                    <span>
                        <OrderStatus namespace="admin" text={sale.statusText} status={sale.status} />
                    </span>
                    <span>
                        <i className="bx bx-calenda"></i>
                        {formatDateTime(order.created_at)}
                    </span>
                </div>


            </div>

        </Card>
    )
}
