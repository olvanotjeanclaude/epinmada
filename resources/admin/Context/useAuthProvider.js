import { useContext } from "react"
import { AuthProviderContext } from "./AuthProvider"

export const useAuthProvider = () => {
    const { token, setToken, user, setUser } = useContext(AuthProviderContext);

    return { token, setToken, user, setUser }
}