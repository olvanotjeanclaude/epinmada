import useFetchConstants from '@/admin/Hooks/useFetchConstants'
import { Alert, AlertTitle, Box, Card, CardContent, CircularProgress, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Error from '../error/Error';

export default function PaymentOptions({ register, errors }) {
    const { paymentMethods, isError, isLoading } = useFetchConstants();
    const [paymentType, setPaymentType] = useState("");

    if (isLoading) return <CircularProgress />

    if (isError) return <Error error="Erreur survenue" />

    return (
        <>
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

            <Card>
                <CardContent>
                    <Typography variant="h5" mb={1}>Options De Paiement</Typography>

                    <Box display="flex" flexWrap="wrap" gap={2}>
                        <FormControl error={!!errors.paymentMethod}>
                            <RadioGroup
                                onChange={e => setPaymentType(e.target.value)}
                                defaultValue=""
                            >
                                {
                                    isLoading ? <CircularProgress /> :
                                        paymentMethods.mobile.map(mobile => (
                                            <FormControlLabel
                                             value={mobile.key}
                                                key={mobile.key}
                                                {...register("paymentMethod", {
                                                    required: "Veuillez entrer le mode de paiement"
                                                })}
                                                control={<Radio value={mobile.name} sx={{ height: "30px" }} />}
                                                label={mobile.name} />
                                        ))
                                }
                            </RadioGroup>
                            <FormHelperText>{errors.paymentMethod?.message}</FormHelperText>
                        </FormControl>
                    </Box>
                </CardContent>
            </Card>

            <TextField
                inputProps={{
                    style: { background: "#fff" }
                }}
                {...register("payment_phone_number", {
                    required: "Veuillez entrer votre numéro de téléphone",
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Le numéro de téléphone doit comporter exactement 10 chiffres."
                    }
                })}
                error={!!errors.payment_phone_number}
                helperText={errors?.payment_phone_number?.message}
                label={`Votre Numero De Telephone ${paymentType}`} required variant="outlined"
            />

        </>
    )
}
