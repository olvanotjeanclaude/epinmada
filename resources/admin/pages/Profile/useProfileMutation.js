import { useMutation } from "react-query"
import http from "../../Helper/makeRequest";

const useProfileMutation = () => {
    return useMutation({
        mutationFn: async (data) => (await http.put("update-profile", data)).data,
        mutationKey: ["updateProfile"]
    });
}

export default useProfileMutation;