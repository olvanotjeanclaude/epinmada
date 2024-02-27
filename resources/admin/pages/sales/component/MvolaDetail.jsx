import { formatAmount, formatHumanDateTime, fullName } from '@/common/helper'
import React from 'react'

export default function MvolaDetail({ transaction }) {
    return (
        transaction ? <table className='table'>
            <tbody>
                {transaction?.customer && <tr>
                    <td><b>Client</b></td>
                    <td>{fullName(transaction.customer)}</td>
                </tr>}
                <tr>
                    <td><b>Payé par</b></td>
                    <td>MVOLA</td>
                </tr>
                <tr>
                    <td><b>Date</b></td>
                    <td>{formatHumanDateTime(transaction.creationDate)}</td>
                </tr>
                <tr>
                    <td><b>Montant</b></td>
                    <td>{formatAmount(transaction.amount ?? 0)}</td>
                </tr>
                <tr>
                    <td><b>Débiteur</b></td>
                    <td>{transaction?.debitParty && transaction.debitParty.length > 0 ? transaction.debitParty[0].value : "-"}</td>
                </tr>
                <tr>
                    <td><b>Credit Pour</b></td>
                    <td>{transaction?.creditParty && transaction.creditParty.length > 0 ? transaction.creditParty[0].value : "-"}</td>
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
        </table> : <></>
    )
}
