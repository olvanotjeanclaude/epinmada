import React, { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

function ToastMessage({ data }) {
    const location = useLocation();

    const message = data ?? location.state?.message ?? {};

    const alertToast = () => {
        switch (data?.type) {
            case "success":
                toast.success(data.message ?? "");
                break;
            case "error":
                toast.error(data.message ?? "");
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