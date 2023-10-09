import { useMutation, useQuery, useQueryClient } from "react-query"
import customerService from "../../service/CustomerService";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const useFetchAll = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState("");
    const [order, setOrder] = useState({ name: 1 });

    useEffect(() => { setCurrentPage(parseInt(currentPage)) }, [currentPage]);

    useEffect(() => { setCurrentPage(1) }, [query]);

    const { data, error, isLoading, isError } = useQuery({
        queryKey: [customerService.name, currentPage, query, order],
        queryFn: () => customerService.fetchAll(currentPage, { query, order }),
        keepPreviousData: true,
        onError: (error) => new Error(error.message)
    });

    return {
        currentPage, setCurrentPage,
        query, setQuery,
        order: order,
        setOrder,
        data, error, isLoading, isError
    }
}


export const useDeleteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: "deleteCustomers",
        mutationFn: async (IDs) => await customerService.deleteMultiple(IDs),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [customerService.name] })
    });
}

export const useShow = () => {
    const { id } = useParams();
    return useQuery({
        queryKey: "showCustomer",
        queryFn: async () => await customerService.show(id)
    })
}