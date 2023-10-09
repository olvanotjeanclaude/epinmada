import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Image } from 'react-bootstrap';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function ModalInvoiceImage({ sale, open, setOpen }) {

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpen(false)}
        >
            <DialogTitle>Ordre No {sale.unique_id}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Image  fluid src={`/${sale.invoice_image}`} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>D'Accord</Button>
            </DialogActions>
        </Dialog>
    );
}
