import React from 'react'
import { Card, Image, Stack } from 'react-bootstrap'
import { capitalizeLetter } from '../../../Helper/Helper'

export default function Product({ product }) {
    return (
        <Card className='mb-2'>
            <Card.Body className='p-2'>
                <div className="d-flex justify-content-between align-items-center flex-wrap  gap-2">
                    <Stack gap={2} direction='horizontal' className='flex-grow-1'>
                        <Image width={100} thumbnail src={`${product.image_url}`} />
                        <div className='d-flex flex-column overflow-hidden'>
                            <h5 className='card-title text-truncate'>{capitalizeLetter(product.name)}</h5>
                            <span className='card-text text-muted'>{capitalizeLetter(product.category.name)}</span>
                        </div>
                    </Stack>

                    <div>
                        <h4>{product.formatted_price}</h4>
                        <div className='d-flex  gap-2 b-dark'>
                            <a className='text-danger'>
                                <i className="mdi mdi-trash-can font-size-18"></i>
                            </a>
                            <a className='text-info'>
                                <i className="mdi mdi-cart font-size-18"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
