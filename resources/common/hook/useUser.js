import { useQuery } from "react-query";
import http from "../http";
import { HandleError } from "../HandleError";

const useUser = () => {
    const query = useQuery({
        queryKey: "user",
        keepPreviousData: true,
        queryFn: async () => await http.get("/user")
            .then(res => res.data)
            .catch(HandleError.catch)
    });

    return {
        ...query,
        user: query.data,
    };
}

export default useUser;