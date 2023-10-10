import { useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import useUserForm from "../../Hooks/useUserForm";
import useApiCallback from "../../Hooks/useApiCallback";
import userService from "@/admin/service/userService";

const useUserMutation = () =>{
    const toast = useRef(null);
    const { id } = useParams();
    const queryClient = useQueryClient();

    const user = useQuery({
        queryKey: [id],
        queryFn: async () => await userService.show(id),
        enabled: id != undefined
    });

    const addMutation = useMutation({
        mutationFn: (newData) => userService.store(newData),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [userService.endPoint] })
    });

    const updateMutation = useMutation({
        mutationFn: (dataToUpdate) => userService.update(dataToUpdate),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [userService.endPoint] })
    });

    const deleteMutation = useMutation({
        mutationFn: (dataToUpdate) => userService.destroy(dataToUpdate.id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [userService.endPoint] })
    });

    const { register, handleSubmit, errors, user_types, setError } = useUserForm(user.data);

    const { onError, onSuccess } = useApiCallback(toast, setError);

    const action = user.data ? "update" : "store";

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
        user,
        register, handleSubmit,
        errors,
        user_types,
        toast,
        onError, onSuccess, onSubmit,
        action,
        id
    }
}

export default useUserMutation;