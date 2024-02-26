import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PaymentDetail from './PaymentDetail';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalPaymentVerification({ open, setOpen, transaction, payment_mode }) {
    const handleClose = () => {
        setOpen(false);
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <React.Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Détail de la transaction</DialogTitle>
                <DialogContent>
                    <>
                        {
                            transaction?.transactionReference ?
                                <PaymentDetail transaction={transaction} payment_mode={payment_mode} /> :
                                <Typography>{transaction?.message}</Typography>
                        }
                    </>
                    <Button variant='contained' sx={{ float: "right" }} onClick={handleClose} autoFocus>
                        D'accord
                    </Button>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}