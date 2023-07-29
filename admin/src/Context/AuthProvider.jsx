import { createContext, useState } from "react";
import PropTypes from 'prop-types';


const initValue = {
    token: null,
    setToken: () => { }
};

export const AuthProviderContext = createContext(initValue);

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("access_token"));

    return (
        <AuthProviderContext.Provider value={{ token, setToken }}>
            <div> {children}</div>
        </AuthProviderContext.Provider>
    );
}


