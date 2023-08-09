import React from 'react'

function CardRow({ label, value }) {
    return (
        <div className="d-flex flex-column flex-sm-row  flex-wrap">
            <div style={{ minWidth: "180px" }} className="m-0 card-text font-weight-bold">
                <b>{label}</b>
            </div>
            <div className="m-0 card-text">{value}</div>
        </div>
    )
}

export default CardRow