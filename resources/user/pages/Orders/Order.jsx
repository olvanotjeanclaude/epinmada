import { Box, Card, CardContent, Stack, Typography, TextField, Avatar, Chip } from '@mui/material'
import { deepPurple, green, grey } from '@mui/material/colors'
import React from 'react'

export default function Product() {
    return (
        <Card sx={{ border: `1px solid ${grey[300]}`, padding: 0,flexGrow:1 }} elevation={0}>
            <CardContent>
                <Stack direction="row" mb={1} justifyContent="space-between">
                    <Typography variant="h5">Netflix Product</Typography>
                    <Typography variant="h5">23.01.2021</Typography>
                </Stack>
                <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
                    <Stack direction="row" flexGrow={1} gap={2}>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                        <Stack>
                            <Typography variant="h6">Commande No</Typography>
                            <Typography variant="body2" color={grey[700]}>#12121212</Typography>
                        </Stack>
                    </Stack>
                    <Box flexGrow={1}>
                        <Chip size='small' variant='outlined' label="Produit Livré" color="success" />
                    </Box>
                    <Stack direction={{xs:"row",md:"column"}} gap={{xs:2,md:0}} alignItems="center">
                        <Typography variant="h6" color="success">12 000 Ariary</Typography>
                        <Typography variant="subtitle2" color={green[500]}>Orange Money</Typography>
                    </Stack>
                </Box>
            </CardContent>
        </Card>

    )
}
