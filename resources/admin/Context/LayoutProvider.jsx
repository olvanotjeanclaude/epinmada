import useAuth from "@/common/hook/useAuth";
import { createContext } from "react";

const defaultValue = {
    sidebarEnable: false,
    setSidebarEnable: () => { }
}

export const LayoutProviderContext = createContext(defaultValue);

const LayoutProvider = ({ children }) => {
    const { user, userLoading, userError } = useAuth();

    if (userLoading) return <></>

    return userError || !user ? window.location.replace("/sign-in") :
        <LayoutProviderContext.Provider value={{ defaultValue }}>
            {children}
        </LayoutProviderContext.Provider>;
}

export default LayoutProvider;