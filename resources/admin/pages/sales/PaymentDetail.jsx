import { formatAmount, formatHumanDateTime, fullName } from '@/common/helper'
import React from 'react'
import { Card } from 'react-bootstrap'
import MvolaDetail from './component/MvolaDetail'
import OrangeMoneyDetail from './component/OrangeMoneyDetail'
import AirtelMoneyDetail from './component/AirtelMoneyDetail'

export default function PaymentDetail({ transaction, payment_mode }) {
    const component = {
        mvola: <MvolaDetail transaction={transaction} />,
        orangeMoney: <OrangeMoneyDetail />,
        airtlelMoney: <AirtelMoneyDetail />
    }

    return (
        <Card>
            <Card.Body>
                {component[payment_mode]}
            </Card.Body>
        </Card>
    )
}
