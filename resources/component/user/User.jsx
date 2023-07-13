import React from 'react'

export default function User({ user }) {
    return (
        <div className="card text-center">
            <div className="card-body">
                <div className="avatar-sm mx-auto mb-4">
                    <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16">
                        {user.name[0] ?? ''} {user.surname[1] ?? ''}
                    </span>
                </div>
                <h5 className="font-size-15 mb-1"><a
                    className="text-dark">{user.full_name}</a>
                </h5>
                <br />
                <p className="text-muted">{user.email}</p>
                <p className="text-muted">{user.phone}</p>

                <div>
                    <a className="badge bg-primary font-size-11 m-1">
                        {user.type_text}
                    </a>
                </div>
            </div>
            <div className="card-footer bg-transparent border-top">
                <div className="contact-links d-flex font-size-20">
                    <div className="flex-fill">
                        <a ><i className="bx bx-message-square-dots"></i></a>
                    </div>

                    <div className="flex-fill">
                        <a >
                            <i className="bx bx-user-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
