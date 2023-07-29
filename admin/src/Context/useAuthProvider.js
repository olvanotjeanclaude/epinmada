import { useContext } from "react"
import { AuthProviderContext } from "./AuthProvider"

export const useAuthProvider = () => {
    const { token, setToken } = useContext(AuthProviderContext);

    return { token, setToken }
}