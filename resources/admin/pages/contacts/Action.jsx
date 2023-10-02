import { Box, IconButton } from '@mui/material';
import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useQueryClient, useMutation } from 'react-query';
import contactService from '@/admin/service/ContactService';

export default function Action({ contact, setIsModalOpen }) {
    const queryClient = useQueryClient();
    const contactMutation = useMutation({
        mutationFn: (data) => contactService.update(data),
        onError: (error) => new Error(error.message)
    });

    const handleShowConctact = () => {
        setIsModalOpen(true);
        contactMutation.mutate({ id: contact.id, seen: true },{
            onSuccess(){
                queryClient.invalidateQueries({queryKey:[contactService.endPoint]});
            }
        })
    }

    return (
        <Box display="flex">
            <IconButton onClick={handleShowConctact} size="small" aria-label='Voir'>
                <VisibilityIcon />
            </IconButton>

            <IconButton size="small" aria-label='Delete'>
                <DeleteIcon />
            </IconButton>
        </Box>
    )
}
