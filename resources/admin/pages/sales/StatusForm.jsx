import useFetchConstants from '@/admin/Hooks/useFetchConstants'
import Error from '@/admin/component/Message/Error';
import { capitalizeLetter } from '@/common/helper';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useStatusMutation } from './useSale';
import { useForm } from 'react-hook-form';


export const StatusForm = ({ sale }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            status: false
        }
    });

    const { isLoading, isError, saleTypes } = useFetchConstants();
    const statusMutation = useStatusMutation();

    if (isLoading) return <CircularProgress />;

    if (isError) return <Error error="Erreur inconnue" />;

    const onSubmit = (status) => {
        statusMutation.mutate(status, {
            onSuccess(res) {
                setMessage(res.message);
                setOpen(true);
            }
        })
    }

    return <Card>
        <Snackbar open={open} autoHideDuration={6000}  onClose={() => setOpen(false)}>
            <Alert variant='filled' onClose={() => setOpen(false)} severity="success">
                {message}
            </Alert>
        </Snackbar>
        <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)} noValidate className='needs-validation'>
                <h4 className="card-title">{capitalizeLetter('livraison du produit')}</h4>
                {
                    Object.entries(saleTypes).map(([key, value]) => {
                        return <div className="form-group" key={key}>
                            <Form.Check
                                disabled={sale.status == key}
                                name='status'
                                value={key}
                                {...register("status", {
                                    required: "Entrer le status de vente!"
                                })}
                                type="radio"
                                label={capitalizeLetter(value)}
                                id={key}
                                isInvalid={!!errors.status}
                            />
                        </div>
                    }
                    )
                }

                <Button
                    disabled={statusMutation.isLoading}
                    type="submit" className="btn btn-success btn-sm mt-2 waves-effect waves-light">
                    <i className="bx bx-check font-size-16 align-middle me-2"></i>
                    Confirmer
                </Button>
            </Form>
        </Card.Body>
    </Card>
}