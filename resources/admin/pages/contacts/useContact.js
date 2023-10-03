import contactService from "@/admin/service/ContactService";
import {  useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useContact = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState("");
    const [checkBoxs, setCheckBoxs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const queryClient = useQueryClient();
    
    const invalidateContactQuery = () => {
        queryClient.invalidateQueries([contactService.endPoint]);
    };

    const fetchContact = () => {
        const parsedCurrentPage = parseInt(currentPage);
        const { data, error, isLoading, isError } = useQuery({
            queryKey: [contactService.endPoint, parsedCurrentPage, query],
            queryFn: () => contactService.fetchAll(parsedCurrentPage, { query }),
            keepPreviousData: true,
        });

        return {
            data,
            isLoading,
            error,
            isError
        };
    };

    const contactMutation = useMutation({
        mutationFn: (data) => contactService.update(data),
    });

    const deleteMutation = useMutation({
        mutationFn: (data) => contactService.destroy(data.id),
        onSuccess: () => { invalidateContactQuery()},
    });

    const showContact = (contact) => {
        setIsModalOpen(true);
        contactMutation.mutate({ id: contact.id, seen: true }, {
            onSuccess: () => { invalidateContactQuery()},
        });

        setSelected(contact);
    };

    return {
        currentPage,
        setCurrentPage,
        fetchContact,
        showContact,
        deleteMutation,
        isModalOpen,
        setIsModalOpen,
        selected,
        setSelected,
        query,
        setQuery,
        checkBoxs,
        setCheckBoxs,
    };
};
