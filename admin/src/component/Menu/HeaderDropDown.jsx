import http from "../../Helper/makeRequest"
import { useState } from "react";
import { useAuthProvider } from "../../Context/useAuthProvider";
import { capitalizeLetter } from "../../Helper/Helper";
import { Link } from "react-router-dom";

export default function HeaderDropDown() {
    const { setToken, setUser, user } = useAuthProvider();

    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = async () => {
        const response = await http.post("/logout").then(response => response.data);

        if (response.type == "success") {
            localStorage.removeItem("access_token");
            localStorage.removeItem("user");
            setToken(null);
            setUser(null);

            location.href = "/login";
        }
    }

    return (
        <div className="dropdown d-inline-block">
            <button type="button" onClick={() => setShowDropdown(!showDropdown)}
                className={`btn header-item waves-effects  ${showDropdown ? 'show' : ''}`}
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {/* <img className="rounded-circle header-profile-user" src="/images/users/avatar-1.jpg"
                    alt="Header Avatar" /> */}
                <span className="d-non d-xl-inline-block ms-1" key="t-henry">
                    {user && capitalizeLetter(`${user.name} ${user.surname}`)}
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : ''}`}
                onMouseLeave={() => setShowDropdown(false)}>
                <Link to="profile" className="dropdown-item">
                    <i className="bx bx-user font-size-16 align-middle me-1"></i>
                    <span key="t-profile">Profile</span>
                </Link>
               
                {/* <a className="dropdown-item">
                    <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>
                    <span key="t-lock-screen">Lock screen</span>
                </a> */}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" role="button" onClick={handleLogout}>
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                    <span key="t-logout">Se déconnecter</span>
                </a>
            </div>
        </div>
    )
}
