import { useRef } from "react";
import { useParams } from "react-router-dom";
import productService from "../../service/ProductService";
import useApiCallback from "../../Hooks/useApiCallback";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useProductForm from "../../Hooks/useProductForm";

const useProductMutation = () => {
    const toast = useRef(null);
    const { id } = useParams();
    const queryClient = useQueryClient();

    const useFetchProduct = () =>{
        return useQuery({
            queryKey: [id],
            queryFn: async () => await productService.show(id),
            enabled: id != undefined
        });
    }

    const useAddMutation = () =>{
       return useMutation({
            mutationFn: (newData) => productService.store(newData),
            onSuccess: () => queryClient.invalidateQueries({ queryKey: [productService.endPoint] })
        });
    }

    const useUpdateMutation = () =>{
        useMutation({
            mutationFn: (dataToUpdate) => productService.update(dataToUpdate),
            onSuccess: () => queryClient.invalidateQueries({ queryKey: [productService.endPoint] })
        });
    }

    const useDeleteMutation = () =>{
      return  useMutation({
            mutationFn: (dataToUpdate) => productService.destroy(dataToUpdate.id),
            onSuccess: () => queryClient.invalidateQueries({ queryKey: [productService.endPoint] })
        });
    }
    
    const { register, handleSubmit, errors, setError, control, setValue } = useProductForm(product);

    const { onError, onSuccess } = useApiCallback(toast, setError);

    const action = productService.data ? "update" : "store";


    const useOnSubmit = async (data) => {
        const params = {
            ...data,
            category: data.category.id
        };

        const addMutation = useAddMutation();
        const updateMutation = useUpdateMutation();

        switch (action) {
            case "store":
                addMutation.mutate(params, { onError, onSuccess });
                break;

            case "update":
                updateMutation.mutate((params), { onError, onSuccess });
                break;

            default:
                console.log("eto..");
                break;
        }
    }

    return {
        useAddMutation,
        useUpdateMutation,
        useDeleteMutation,
        useOnSubmit,
        register,
        handleSubmit,
        errors,
        setError,
        control,
        setValue,
        toast,
        useFetchProduct,
        action,
    }
}

export default useProductMutation;