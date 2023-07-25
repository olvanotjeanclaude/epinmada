import { Toast } from 'primereact/toast';
import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

function ToastMessage() {
    const location = useLocation();
    const toastRef = useRef(null);

    const data = location.state ?? {};

    const alertToast = () => {
        if (data.type && data.message) {
            toastRef.current.show({
                severity: data.type,
                summary: data.message
            });

            window.history.replaceState({}, document.title)
        }
    }

    useEffect(() => { alertToast() }, [data]);

    return (
        <Toast ref={toastRef} />
        // <Toaster toastOptions={{ duration: 5000 }} />
    )
}

export default ToastMessage;