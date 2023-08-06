import { createContext } from "react";

const defaultValue = {
    sidebarEnable: false,
    setSidebarEnable: () => { }
}

export const LayoutProviderContext = createContext(defaultValue);

const LayoutProvider = ({ children }) => {
    return <LayoutProviderContext.Provider value={{ defaultValue }}>
        {children}
    </LayoutProviderContext.Provider>
}

export default LayoutProvider;