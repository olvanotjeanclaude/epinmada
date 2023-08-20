import { useEffect, useState } from "react";
import http from "@/common/http";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(false);
    const [userError, setUserError] = useState(false);

    useEffect(() => async () => {
        setUserLoading(true);
        await http.get("/user")
            .then(res => {
                setUser(res.data);
            })
            .catch(e => {
                setUserError(true);
            })
            .finally(e => {
                setUserLoading(false);
            })
    }, []);

    const logout = async () => {
        const response = await http.post("/logout").then(response => response.data);

        if (response.type == "success") {
            return location.href = "/sign-in";
        }

        location.reload();
    }

    return {
        logout,
        user,
        userLoading,
        userError
    }
}



export default useAuth;