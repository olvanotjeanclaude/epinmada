import React from 'react'
import { Link } from 'react-router-dom'

export default function PageTitle({ pageTitle, url, title }) {
    return (
        <div className="row">
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">{pageTitle ?? ""}</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                                <Link to={`/${pageTitle?.toLowerCase()}`}>{pageTitle}</Link>
                            </li>
                            <li className="breadcrumb-item active">{title}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
