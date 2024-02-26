import { formatHumanDateTime } from '@/common/helper'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function PaymentDetail({ transaction, payment_mode }) {
    return (
        transaction?.transactionReference && payment_mode ? <Card>
            <Card.Body>
                <table className='table table-nowrap'>
                    <tbody>
                        <tr>
                            <td><b>Payé par</b></td>
                            <td>{payment_mode?.toUpperCase()}</td>
                        </tr>
                        <tr>
                            <td><b>Date</b></td>
                            <td>{formatHumanDateTime(transaction.creationDate)}</td>
                        </tr>
                        <tr>
                            <td><b>Montant</b></td>
                            <td>{transaction.amount} {transaction.currency ?? "-"}</td>
                        </tr>
                        <tr>
                            <td><b>Débiteur</b></td>
                            <td>{transaction.debitParty[0]?.value ?? "-"}</td>
                        </tr>
                        <tr>
                            <td><b>Credit Pour</b></td>
                            <td>{transaction.creditParty[0]?.value ?? "-"}</td>
                        </tr>
                        <tr>
                            <td><b>Frais</b></td>
                            <td>{transaction.fees?.feeAmount ?? "0"}</td>
                        </tr>
                        <tr>
                            <td><b>Référence</b></td>
                            <td>{transaction.transactionReference ?? "-"}</td>
                        </tr>
                        <tr>
                            <td><b>Statut</b></td>
                            <td>{transaction.transactionStatus}</td>
                        </tr>
                        <tr>
                            <td><b>Demandé le</b></td>
                            <td>{formatHumanDateTime(transaction.requestDate)}</td>
                        </tr>
                    </tbody>
                </table>
            </Card.Body>
        </Card> : <></>
    )
}
