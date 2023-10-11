import saleService from "@/admin/service/SaleService";
import { HandleError } from "@/common/HandleError";
import http from "@/common/http";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";


export const useFetch = () => {
    const [query, setQuery] = useState("");
    const [checkboxs, setCheckboxs] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => { setCurrentPage(1) }, [query]);

    const { data, error, isLoading, isError } = useQuery({
        queryKey: [saleService.name, currentPage, query, checkboxs],
        queryFn: () => saleService.fetchAll(currentPage, { query,checkboxs }),
        keepPreviousData: true,
        onError: (error) => new Error(error.message)
    });

    return {
        currentPage, setCurrentPage,
        checkboxs, setCheckboxs,
        data, error, isLoading, isError,
        query, setQuery
    }
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
        mutationKey: ["updateSaleStatus"],
        mutationFn: async (data) => await http.put(`/update-sale-status/${id}`, data)
            .then(res => res.data)
            .catch(HandleError.catch),
        onSuccess() {
            queryClient.invalidateQueries("showSale")
        }
    });
}