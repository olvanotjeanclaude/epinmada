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
        keepPreviousData: true
    });

    return {
        checkboxs,
        setCheckboxs,
        currentPage, setCurrentPage,
        data,
        error,
        isLoading,
        isError
    }
}

export const useShow = () => {
    const { id } = useParams();

    const { data: product, isLoading, error, isError } = useQuery({
        queryKey: [id],
        queryFn: async () => await productService.show(id),
        enabled: id != undefined
    });

    return {
        product,
        isLoading,
        error,
        isError
    }
}

export const useAddMutation = () => {
    const { data, isError, error, isLoading } = useMutation({
        mutationFn: async (newData) => await productService.store(newData),
        mutationKey: productService.name
    });

    return { data, isError, isLoading, error };
}

export const useUpdateMutation = () => {
    const queryClient = useQueryClient();
    const { data, isError, error, isLoading } = useMutation({
        mutationFn: async (newData) => await productService.update(newData),
        mutationKey: [productService.name],
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [productService.endPoint] })
    });

    return { data, isError, isLoading, error };
}

export const useProductMutation = () =>{
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

    const deleteMutation = useMutation({
        mutationFn: (dataToUpdate) => productService.destroy(dataToUpdate.id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [productService.endPoint] })
    });

    const { register, handleSubmit, errors, user_types,setValue, setError,control } = useProductForm(productService.data);

    const { onError, onSuccess } = useApiCallback(toast, setError);

    const action = product.data ? "update" : "store";

    const onSubmit = async (data) => {
        switch (action) {
            case "store":
                addMutation.mutate(data, { onError, onSuccess });
                break;

            case "update":
                updateMutation.mutate((data), { onError, onSuccess });
                break;
            default:
                break;
        }
    }

    return {
        addMutation,
        updateMutation,
        deleteMutation,
        product,
        register, handleSubmit, control,
        errors,
        user_types,
        toast,
        onError, onSuccess, onSubmit, setValue,
        action,
        id
    }
}