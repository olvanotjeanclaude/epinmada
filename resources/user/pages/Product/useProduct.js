import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { HandleError } from "@/common/HandleError";
import http from "@/common/http";

export const useFetchProduct = () => {
    const [tag, setTag] = useState("all");
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const { data, error, isLoading, isError } = useQuery({
        queryKey: ["front.products", currentPage, query, tag],
        queryFn: async () => await http.get(`/products?page=${currentPage}`, {
            params: { tag, query }
        })
            .then(res => res.data)
            .catch(HandleError.catch),
        keepPreviousData: true,
        onError: (error) => new Error(error.message)
    });

    return {
        tag, setTag,
        currentPage, setCurrentPage,
        data, error, isLoading, isError,
        query, setQuery
    }
}


export const useShow = () => {
    const { id } = useParams();

    const { data: product, isLoading, error, isError } = useQuery({
        queryKey: [id],
        queryFn: async () => await productService.show(id),
        enabled: id != undefined
    });

    return { product, isLoading, error, isError }
}

export const useAddToCartMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["addToCart"],
        mutationFn: async (product_id) => {
            return await http.post("/baskets", { product_id })
                .then(res => res.data)
                .catch(HandleError.catch)
        },
        onSuccess(data) {
            queryClient.invalidateQueries(["front.baskets"])
        }
    });
};

export const useDeleteCartMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["deleteCart"],
        mutationFn: async (product_id) => {
            return await http.delete(`/baskets/${product_id}`)
                .then(res => res.data)
                .catch(HandleError.catch)
        },
        onSuccess(data) {
            queryClient.invalidateQueries(["front.baskets"])
        }
    });
}
