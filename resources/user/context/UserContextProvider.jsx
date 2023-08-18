import useLocalStorage from "@/common/hook/useLocalStorage";
import { createContext, useState, useContext, useEffect } from "react";

const init = {
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
};

const UserContext = createContext(init);
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user");
    const [token, setToken] = useLocalStorage("access_token");

    if(!user || !token) window.location.href = "/sign-in";

    return <UserContext.Provider value={{ user, setUser, token, setToken }}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;

export const useUser = () => {
    const { user, setUser, token, setToken } = useContext(UserContext);
    return {
        user,
        setUser,
        setToken,
        token
    };
}