import React, { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

function ToastMessage() {
    const location = useLocation();

    const message = location.state?.message ?? {};

    const alertToast = () => {
        switch (message?.type) {
            case "success":
                toast.success(message.value ?? "");
                break;
            case "error":
                toast.error(message.value ?? "");
                break;

            default:
                break;
        }

        window.history.replaceState({}, document.title)
    }

    useEffect(() => { alertToast() }, [message]);

    return (
        <Toaster toastOptions={{ duration: 5000 }} />
    )
}

export default ToastMessage;