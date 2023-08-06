import { useContext } from "react"
import { LayoutProviderContext } from "./LayoutProvider"

const useLayoutProvider = () => {
    const { sidebarEnable, setSidebarEnable } = useContext(LayoutProviderContext);

    return {
        sidebarEnable,
        setSidebarEnable
    }
}

export default useLayoutProvider;