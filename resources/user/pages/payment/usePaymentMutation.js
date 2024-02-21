import { HandleError } from "@/common/HandleError";
import http from "@/common/http";
import { useMutation } from "react-query";

const usePaymentMutation = () => {
    const payMutation = useMutation({
        mutationKey: "payMutation",
        mutationFn: async (data) => await http.post(data.endpoint, data)
            .then(res => { return res.data })
            .catch(HandleError.catch)
    });

    return { payMutation };
}

export default usePaymentMutation;