import { useQuery } from "react-query";
import http from "../../Helper/makeRequest";

const useProfile = () => {
    return useQuery({
        queryFn: async () =>
            await http.get("/user")
                .then((res) => res.data)
                .catch((err) => new Error(err.message)),
        queryKey: "profile",
    });
}

export default useProfile;