import { useLocation, useNavigate } from "react-router-dom";
import { mapFormErrors } from "../Helper/Helper";

const useApiCallback = (toast, setError) => {
    const navigate = useNavigate();
    const location = useLocation();

    const path = location.pathname.split("/").filter(path => path != "")[0];

    const onSuccess = ({ data }) => {
        if (data.code == 422) {
            const errors = mapFormErrors(data.errors);

            errors.forEach(({ name, type, message }) => {
                setError(name, { type, message })
            });

            return true;
        }

        if (data.code == 200) {
            navigate(`/${path}`, {
                state: data
            });

            return true;
        }

        if (data.type && data.message) {
            toast.current.show({
                severity: data.type,
                summary: data.message
            });
        }
    };

    const onError = (error) => {
        toast.current.show({
            severity: "error",
            summary: error,
        });
    };

    return {
        onSuccess,
        onError
    }
}

export default useApiCallback;