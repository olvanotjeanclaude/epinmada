import { createContext, useState } from "react";
import PropTypes from 'prop-types';


const initValue = {
    token: null,
    user: null,
    setToken: () => { },
    setUser: () => { }
};

export const AuthProviderContext = createContext(initValue);

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("access_token"));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    return (
        <AuthProviderContext.Provider value={{ token, setToken, user, setUser }}>
            <div> {children}</div>
        </AuthProviderContext.Provider>
    );
}


