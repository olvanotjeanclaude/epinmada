import React from 'react'

function Notification() {
    return (
        <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="bx bx-bell bx-tada"></i>
                <span className="badge bg-danger rounded-pill">3</span>
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown">
                <div className="p-3">
                    <div className="row align-items-center">
                        <div className="col">
                            <h6 className="m-0" key="t-notifications"> Notifications </h6>
                        </div>
                        <div className="col-auto">
                            <a href="#!" className="small" key="t-view-all"> View All</a>
                        </div>
                    </div>
                </div>
                <div data-simplebar style={{ maxHeight: "230px" }}>
                    <a href="/#" className="text-reset notification-item">
                        <div className="d-flex">
                            <div className="avatar-xs me-3">
                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                    <i className="bx bx-cart"></i>
                                </span>
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                                <div className="font-size-12 text-muted">
                                    <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#/" className="text-reset notification-item">
                        <div className="d-flex">
                            <img src="images/users/avatar-3.jpg"
                                className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                            <div className="flex-grow-1">
                                <h6 className="mb-1">James Lemire</h6>
                                <div className="font-size-12 text-muted">
                                    <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#/" className="text-reset notification-item">
                        <div className="d-flex">
                            <div className="avatar-xs me-3">
                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                    <i className="bx bx-badge-check"></i>
                                </span>
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                                <div className="font-size-12 text-muted">
                                    <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="/#" className="text-reset notification-item">
                        <div className="d-flex">
                            <img src="images/users/avatar-4.jpg"
                                className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                            <div className="flex-grow-1">
                                <h6 className="mb-1">Salena Layfield</h6>
                                <div className="font-size-12 text-muted">
                                    <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="p-2 border-top d-grid">
                    <a className="btn btn-sm btn-link font-size-14 text-center" href="#/">
                        <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Notification