import { useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import productService from "../../service/ProductService";
import { useParams } from "react-router-dom";
import useProductForm from "../../Hooks/useProductForm";
import useApiCallback from "../../Hooks/useApiCallback";

export const useFetchAll = () => {
    const [checkboxs, setCheckboxs] = useState({});

    const [currentPage, setCurrentPage] = useState(1);

    const { data, error, isLoading, isError } = useQuery({
        queryKey: [productService.name, currentPage, checkboxs],
        queryFn: () => productService.fetchAll(currentPage, checkboxs),
        keepPreviousData: true,
        onError: (error) => new Error(error.message)
    });

    return {
        checkboxs, setCheckboxs,
        currentPage, setCurrentPage,
        data, error, isLoading, isError
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

export const useProductMutation = () => {
    const toast = useRef(null);
    const { id } = useParams();
    const queryClient = useQueryClient();

    const product = useQuery({
        queryKey: [id],
        queryFn: async () => await productService.show(id),
        enabled: id != undefined
    });

    const addMutation = useMutation({
        mutationFn: (newData) => productService.store(newData),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [productService.endPoint] })
    });

    const updateMutation = useMutation({
        mutationFn: (dataToUpdate) => productService.update(dataToUpdate),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [productService.endPoint] })
    });

    const { register, handleSubmit, errors, setValue, setError, control } = useProductForm(product.data);

    const { onError, onSuccess } = useApiCallback(toast, setError);

    const action = product.data ? "update" : "store";

    const onSubmit = async (data) => {
        const payload = {
            ...data,
            category: data.category.id,
            imageKey: localStorage.getItem("product")
        };

        switch (action) {
            case "store":
                addMutation.mutate(payload, { onError, onSuccess });
                break;

            case "update":
                updateMutation.mutate((payload), { onError, onSuccess });
                break;
            default:
                break;
        }

        if (addMutation.isSuccess || updateMutation.isSuccess) {
            localStorage.removeItem("product")
        }
    }

    return {
        addMutation,
        updateMutation,
        product,
        register, handleSubmit, control,
        errors,
        toast,
        onError, onSuccess, onSubmit, setValue,
        action,
        id
    }
}

export const useDeleteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (dataToUpdate) => productService.destroy(dataToUpdate.unique_id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [productService.endPoint] })
    });
}