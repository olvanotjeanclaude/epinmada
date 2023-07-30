import { Table } from 'react-bootstrap'

function Specification() {
    return (
        <div className="mt-5">
            <h5 className="mb-3">Specifications :</h5>

            <div className="table-responsive">
                <Table className="table mb-0 table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row" style={{ width: "400px" }}>Category</th>
                            <td>Headphone</td>
                        </tr>
                        <tr>
                            <th scope="row">Brand</th>
                            <td>JBL</td>
                        </tr>
                        <tr>
                            <th scope="row">Color</th>
                            <td>Black</td>
                        </tr>
                        <tr>
                            <th scope="row">Connectivity</th>
                            <td>Bluetooth</td>
                        </tr>
                        <tr>
                            <th scope="row">Warranty Summary</th>
                            <td>1 Year</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Specification