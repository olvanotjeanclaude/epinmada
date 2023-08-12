import React from 'react'
import { Card } from 'react-bootstrap'

export default function OrderSummary() {
    return (
        <Card>
            <Card.Body>
                <h4 className="card-title mb-3">Commandes</h4>

                <div className="table-responsive">
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td>Pubg Mobile 4000 Uc</td>
                                <td> 20 000 Ar</td>
                            </tr>
                        
                            <tr>
                                <th>Total :</th>
                                <th> 1744.22 Ar</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card.Body>
        </Card>
    )
}
