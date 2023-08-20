import { Avatar, Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import useUser from '@/common/hook/useUser'
import Error from '../pages/error/Error';

export default function UserInfo() {
    const { user,isLoading,isError,error } = useUser();

    if(isLoading)  return <CircularProgress />

    if(isError) return <Error error={error} />
    
    return (
        <Box display="flex" paddingBottom={1} alignItems="center" gap={2} justifyContent="space-between">
            <Avatar
                alt="Remy Sharp"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                sx={{ width: 55, height: 55 }}
            />
            <Typography variant="h5" fontWeight={500} mr={2} textAlign="right">
                {user?.name} {user?.surname}
            </Typography>
        </Box>
    )
}
