import { createContext, useContext, useState } from "react";
import http from "../../helper/makeRequest";

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

    return <AuthContext.Provider value={{ user, setUser, token, isAuthenticated, setIsAuthenticated }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthProvider = () => {
    const { user, setUser, isAuthenticated, token, setIsAuthenticated } = useContext(AuthContext);

    const userIsLoggedIn = (data) => {
        if (data?.user) {
            setUser(data.user);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            window.location.href = "/";

            return data;
        }

        return null;
    }

    const login = async (params) => {
        const data = await http.post(`/login`, params)
            .then(({ data }) => data)
            .catch((error) => error);

        userIsLoggedIn(data);

        return data;
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        logoutGoogle();

        window.location.href = "/signin";
    }

    const logoutGoogle = () => {
        setTimeout(() => {
            const auth2 = window.gapi.auth2.getAuthInstance();
          
            if (auth2 != null) {
                auth2.signOut().then(auth2.disconnect())
            }

        }, 1000);
    }

    return {
        user,
        token,
        isAuthenticated,
        userIsLoggedIn,
        setUser,
        login,
        logout,
        logoutGoogle,
    }
}
