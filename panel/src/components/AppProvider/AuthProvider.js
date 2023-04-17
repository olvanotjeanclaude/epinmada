import { createContext, useContext, useState } from "react";
import http from "../../helper/makeRequest";
import { Redirect, useHistory } from "react-router-dom";

export const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    token: null,
    setUser: () => { },
    setIsAuthenticated: () => { }
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user"));
    const checkAuth = localStorage.getItem("user") != null && localStorage.getItem("token") != null;
    const [isAuthenticated, setIsAuthenticated] = useState(checkAuth);
    const token = localStorage.getItem("token");

    return <AuthContext.Provider value={{ user, setUser,token, isAuthenticated, setIsAuthenticated }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthProviver = () => {
    const { user, setUser, isAuthenticated,token, setIsAuthenticated } = useContext(AuthContext);
    
    const login = async (params) => {
        const data = await http.post(`/login`, params)
            .then(({ data }) => data)
            .catch((error) => error);

        if (data?.user) {
            setUser(data.user);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            return <Redirect to="/" />;
        }

        return data;
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        window.location.href="/signin";
    }

    return {
        user,
        isAuthenticated,
        setUser,
        login,
        logout,
        token
    }
}
