import { useMutation, useQuery, useQueryClient } from "react-query";
import { Crud } from "../Feature/Crud";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const useQueryApi = (endPoint, path) => {
    const queryClient = useQueryClient();

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);

    const crud = new Crud(endPoint);

    const onSuccess = (data) => {
        if (path) {
            navigate(path, {
                state: {
                    message: data
                }
            })
        }
        queryClient.invalidateQueries(crud.endPoint);
    }

    const fetchData = () => useQuery({
        queryKey: [endPoint, currentPage],
        queryFn: async () => await crud.get(currentPage),
        keepPreviousData: true,
    });

    const showData = (id) => useQuery({
        queryKey: [crud.endPoint, id],
        queryFn:  () =>  crud.show(id),
        keepPreviousData: true,
    });

    const addMutation = useMutation({
        mutationFn: async(newData) => await crud.add(newData),
        onSuccess
    });

    const updateMutation = useMutation({
        mutationFn: (dataToUpdate) => crud.update(dataToUpdate),
        onSuccess
    });

    const deleteMutation = useMutation( async(data) => await crud.delete(data.id), {
        onSuccess: () => {
            queryClient.invalidateQueries(crud.endPoint);
        },
    });

    return {
        currentPage,
        setCurrentPage,
        fetchData,
        showData,
        addMutation,
        updateMutation,
        deleteMutation,
        crud
    }
}

export default useQueryApi;