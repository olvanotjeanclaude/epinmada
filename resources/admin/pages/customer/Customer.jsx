import { capitalizeLetter } from '@/common/helper'
import { Avatar, Box, Card, CardContent, IconButton, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { onDeleteData } from '@/admin/Helper/sweetAlert';
import { useDeleteMutation } from './useCustomers';

export default function Customer({ customer }) {
    const navigate = useNavigate();
    const deleteMutation = useDeleteMutation();

    return (
        <Card>
            <CardContent>
                <Box display="flex" gap={2}>
                    <Avatar sx={{ width: 50, height: 50 }} />

                    <Stack flexGrow={1} width={{ xs: "13.5rem", xl: "15rem" }}>
                        <Typography variant="body1" noWrap>{capitalizeLetter(`${customer.name} ${customer.surname}`)}</Typography>
                        <Typography variant="body2">{customer.email}</Typography>
                        <Typography variant="body2">{customer.phone ?? "-"}</Typography>
                        <Box display="flex">
                            <IconButton onClick={() => onDeleteData([customer.id], deleteMutation)} size="small" aria-label='Delete'>
                                <DeleteIcon />
                            </IconButton>

                            <IconButton size='small' onClick={() => navigate(`${customer.id}`)}>
                                <VisibilityIcon />
                            </IconButton>
                        </Box>
                    </Stack>

                </Box>
            </CardContent>
        </Card>
    )
}