import useFetchConstants from '@/admin/Hooks/useFetchConstants'
import { Alert, AlertTitle, Box, Card, CardContent, CircularProgress, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import Error from '../error/Error';

export default function PaymentOptions({ register, errors }) {
    const { paymentMethods, isError, isLoading } = useFetchConstants();

    if (isLoading) return <CircularProgress />

    if (isError) return <Error error="Erreur survenue" />

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" mb={1}>Options De Paiement</Typography>

                <Box display="flex" flexWrap="wrap" gap={2}>
                    <FormControl error={!!errors.paymentMethod}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                        >
                            {
                                isLoading ? <CircularProgress /> :
                                    paymentMethods.mobile.map(mobile => (
                                        <FormControlLabel value={mobile.key}
                                            key={mobile.key}
                                            {...register("paymentMethod", {
                                                required: "veuillez entrer le mode de paiement"
                                            })}
                                            control={<Radio sx={{ height: "30px" }} />}
                                            label={mobile.name} />
                                    ))
                            }
                        </RadioGroup>
                        <FormHelperText>{errors.paymentMethod?.message}</FormHelperText>
                    </FormControl>

                    {
                        isLoading ? <CircularProgress /> :
                            <Alert sx={{ flexGrow: 1 }} severity="info">
                                <AlertTitle>vous pouvez envoyer l'argent à :</AlertTitle>
                                <Stack>
                                    {
                                        paymentMethods.mobile.map(mobile => (
                                            <Typography variant="paragraph" key={mobile.key} component="p">
                                                {mobile.number}
                                            </Typography>
                                        ))
                                    }
                                </Stack>
                            </Alert>
                    }
                </Box>
            </CardContent>
        </Card>
    )
}
