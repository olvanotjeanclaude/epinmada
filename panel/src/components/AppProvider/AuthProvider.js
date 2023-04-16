import { createContext, useContext, useState } from "react";
import { http } from "../../helper/makeRequest";
import axios from "axios";

export const AuthContext = createContext({
    user: null,
    isAuthenticated: false
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthProviver = () => {
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const login = async (params) => {
        
        return await axios.post(`http://localhost:8000/login`, params)
            .then(({ data }) => {
                if (data.user) {
                    setUser(data.user);
                    setIsAuthenticated(true);
                    localStorage.setItem("user", JSON.stringify(data.user));
                }
                else {
                    logout();
                }

            })
            .catch(err => {
                console.log(err);
            })
            .finally((data) => data)
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
    }

    return {
        user,
        setUser,
        isAuthenticated,
        login,
        logout
    }
}
