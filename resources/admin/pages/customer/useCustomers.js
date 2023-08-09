import { useMutation, useQuery } from "react-query"
import customerService from "../../service/CustomerService";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const useFetchAll = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState("");
    const [order, setOrder] = useState({ name: 1 })


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
    return useMutation({
        mutationKey: "deleteCustomers",
        mutationFn: async (IDs) => await customerService.deleteMultiple(IDs)
    });
}

export const useShow = () => {
    const { id } = useParams();
    return useQuery({
        queryKey: "showCustomer",
        queryFn: async () => await customerService.show(id)
    })
}