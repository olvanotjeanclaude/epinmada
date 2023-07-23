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
        // if (data && data.type == "success" && path) {
        //     navigate(path, {
        //         state: {
        //             message: data
        //         }
        //     })
        // }
        queryClient.invalidateQueries({ queryKey: [crud.endPoint] });
    }

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
        onSuccess
    });

    const updateMutation = useMutation({
        mutationFn: (dataToUpdate) => crud.update(dataToUpdate),
        onSuccess
    });

    const deleteMutation = useMutation((data) => crud.delete(data.id), {
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