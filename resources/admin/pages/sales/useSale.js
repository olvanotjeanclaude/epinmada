import { HandleError } from "@/common/HandleError";
import http from "@/common/http";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";


export const useFetch = () => {
    return useQuery({
        queryKey: "sales",
        queryFn: async () => await http.get("/sales")
            .then(res => res.data)
            .catch(HandleError.catch),
    });
}

export const useShow = () => {
    const { id } = useParams();
    return useQuery({
        queryKey: "showSale",
        queryFn: async () => await http.get(`/sales/${id}`)
            .then(res => res.data)
            .catch(HandleError.catch),
    });
}

export const useStatusMutation = () => {
    const queryClient = useQueryClient();
    const { id } = useParams();

    return useMutation({
        mutationKey:["updateSaleStatus"],
        mutationFn: async (data) => await http.put(`/update-sale-status/${id}`, data)
            .then(res => res.data)
            .catch(HandleError.catch),
            onSuccess(){
                queryClient.invalidateQueries("showSale")
            }
    });
}