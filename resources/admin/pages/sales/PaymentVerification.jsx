import React, {  useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import ModalPaymentVerification from './ModalPaymentVerification'
import { useQuery } from 'react-query';
import http from '@/common/http';
import LoadingButton from '@mui/lab/LoadingButton';
import Swal from 'sweetalert2';
import { confirmButton } from '@/admin/Helper/sweetAlert';

export default function PaymentVerification() {
    const [open, setOpen] = useState(false);
    const [transaction, setTransaction] = useState(null);
    const [paymentMode, setPaymentMode] = useState("");
    const [input, setInput] = useState("");
    const [queryKey, setQueryKey] = useState(null);

    const fetchTransaction = async () => {
        return await http.get(`/mvola/transaction/${input}`)
            .then(res => res.data)
            .catch(() => {
                throw "Failed to load";
            })
    }

    const verifyPayment = (e) => {
        e.preventDefault();
        if (input.length < 5) return false;
        setQueryKey(Date.now());
    }

    const { isLoading } = useQuery({
        queryKey: ["paymentVerification", queryKey, setQueryKey],
        queryFn: fetchTransaction,
        enabled: queryKey != null,
        refetchOnWindowFocus: false,
        onSuccess(data) {
            setPaymentMode("mvola");
            const status = data?.transactionStatus;
            if(status=="failed" || status=="completed"){
                setTransaction(data);
                setOpen(true);
            }
            else{
                setTransaction(null);
                Swal.fire({
                    title: "Message",
                    icon: "info",
                    titleText: data.message,
                    ...confirmButton
                })
            }
        }
    })

    return (
        <>
            <Form onSubmit={verifyPayment}>
                <Card>
                    <Card.Body>
                        <label htmlFor="order">Verification Du Paiement</label>
                        <div className='d-flex'>
                            <Form.Control type="number"
                                value={input}
                                id='order'
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ordre No..." />

                            <LoadingButton
                                type='submit'
                                loading={isLoading}
                                variant='contained'
                                disabled={input.length < 5}
                                sx={{ ml: 2 }}

                            >Vérifier
                            </LoadingButton>
                        </div>
                    </Card.Body>
                </Card>
            </Form>

            {transaction && <ModalPaymentVerification
                transaction={transaction}
                setTransaction={setTransaction}
                payment_mode={paymentMode}
                open={open}
                setOpen={setOpen} />}
        </>
    )
}
