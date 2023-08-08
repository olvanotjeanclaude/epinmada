import { useQuery } from "react-query"
import customerService from "../../service/CustomerService";
import { useState } from "react";

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
