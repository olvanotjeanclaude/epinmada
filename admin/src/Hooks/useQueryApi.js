import { useMutation, useQuery, useQueryClient } from "react-query";
import { Crud } from "../Feature/Crud";
import { useState } from "react";

const useQueryApi = (endPoint) => {
    const queryClient = useQueryClient();

    const [currentPage, setCurrentPage] = useState(1);

    const crud = new Crud(endPoint);

    const fetchData = (params) => useQuery({
        queryKey: [endPoint, currentPage, params],
        queryFn: () => crud.get(currentPage, params),
        keepPreviousData: true,
    });

    const showData = (id) => useQuery({
        queryKey: [crud.endPoint, id],
        queryFn: () => crud.show(id),
        keepPreviousData: true,
    });

    const addMutation = useMutation({
        mutationFn: (newData) => crud.add(newData),
        onSuccess: (data) => queryClient.invalidateQueries({ queryKey: [crud.endPoint] })
    });

    const updateMutation = useMutation({
        mutationFn: (dataToUpdate) => crud.update(dataToUpdate),
        onSuccess: (data) => queryClient.invalidateQueries({ queryKey: [crud.endPoint] })
    });

    const deleteMutation = useMutation({
        mutationFn: (dataToUpdate) => crud.delete(dataToUpdate.id),
        onSuccess: (data) => queryClient.invalidateQueries({ queryKey: [crud.endPoint] })
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