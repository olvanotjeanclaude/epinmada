import React from 'react'
import { Card, Form, Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query'
import http from '../../Helper/makeRequest'
import Error from '../Message/Error'

export default function PaymentMethod() {
    const _fetchPaymentMethod = async () => {
        return await http.get("/constants")
            .then(res => res.data.payementMethods)
            .catch(e => new Error(e.message))
    }
    const { data, isLoading, isError, error } = useQuery({
        queryKey: "paymentMethods",
        queryFn: _fetchPaymentMethod
    });

    if (isError) return <Error error={error} />


    return (
        <Card>
            <Card.Body>
                <h4 className="card-title mb-3">Mode De Payement</h4>

                <div className="d-flex flex-column gap-2">
                    {
                        isLoading ? <Spinner /> :
                            data.mobile.map((payment) => (
                                <Form.Check
                                    key={payment.key}
                                    type="radio"
                                    name='payment'
                                    id={payment.key}
                                    label={payment.name ?? ""}
                                />
                            ))
                    }
                </div>
            </Card.Body>
        </Card>
    )
}
