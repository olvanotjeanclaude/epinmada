import { useQuery } from "react-query"
import http from "../../Helper/makeRequest"
import { useState } from "react";
import { useAuthProvider } from "../../Context/useAuthProvider";
import Error from "../Message/Error";

export default function HeaderDropDown() {
    const { setToken } = useAuthProvider();

    const { data, isLoading, error, isError } = useQuery({
        queryKey: "userInfo",
        queryFn: async () => await http.get("user").catch(error => { throw error.message }),
        keepPreviousData: true
    });

    const [showDropdown, setShowDropdown] = useState(false);

    if (isError) {
        return <Error error={error.message} />
    }


    const handleLogout = async () => {
        const response = await http.post("/logout").then(response => response.data);

        if (response.type == "success") {
            setToken(null);
            localStorage.removeItem("access_token");

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
                {
                    isLoading ? "" :
                        <span className="d-non d-xl-inline-block ms-1" key="t-henry">
                            {data?.data?.name} {data?.data?.surname}
                        </span>
                }
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : ''}`}
                onMouseLeave={() => setShowDropdown(false)}>
                <a className="dropdown-item">
                    <i className="bx bx-user font-size-16 align-middle me-1"></i>
                    <span key="t-profile">Profile</span>
                </a>
                <a className="dropdown-item">
                    <i className="bx bx-wallet font-size-16 align-middle me-1"></i>
                    <span key="t-my-wallet">My Wallet</span></a>
                <a className="dropdown-item d-block">
                    <span className="badge bg-success float-end">11</span>
                    <i className="bx bx-wrench font-size-16 align-middle me-1"></i>
                    <span key="t-settings">Settings</span>
                </a>
                <a className="dropdown-item">
                    <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>
                    <span key="t-lock-screen">Lock screen</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" role="button" onClick={handleLogout}>
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                    <span key="t-logout">Se déconnecter</span>
                </a>
            </div>
        </div>
    )
}
