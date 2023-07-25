export default function HeaderDropDown() {
    return (
        <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {/* <img className="rounded-circle header-profile-user" src="/images/users/avatar-1.jpg"
                    alt="Header Avatar" /> */}
                <span className="d-non d-xl-inline-block ms-1" key="t-henry">Henry</span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="/#"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                <a className="dropdown-item" href="/#"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                <a className="dropdown-item d-block" href="/#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                <a className="dropdown-item" href="/#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" href="logout"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
            </div>
        </div>
    )
}
