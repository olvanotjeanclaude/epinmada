import { useNavigate, useParams } from "react-router-dom";
import useQueryApi from "./useQueryApi";
import { allErrors, mapFormErrors } from "../Helper/Helper";

const useFormLogic = ({ path, apiUrl, useDataForm, toast }) => {
    const navigate = useNavigate();

    const { id } = useParams();

    const queryApi = useQueryApi(apiUrl, `/${path}`);

    const action = id ? "update" : "store";

    const response = id == undefined ? null : showData(id);

    const dataForm = useDataForm(response?.data);

    const onSuccess = (data) => {
        const toastParams = {
            severity: data.type,
            summary: data.message,
        };

        if (data.code == 422) {
            const errors = mapFormErrors(data.errors);

            const allError = allErrors(data.errors).map(err => err).join(".");

            toastParams.detail = allError;

            errors.forEach(({ name, type, message }) => {
                dataForm.setError(name, { type, message })
            });
        }

        toast.current.show(toastParams);


        if (data.type == "success") {
            setTimeout(() => {
                navigate(`/${path}`)
            }, 3000)
        }
    };

    const onError = (error) => {
        toast.current.show({
            severity: "error",
            summary: error,
        });
    };

    return {
        ...dataForm,
        ...queryApi,

        onSuccess,
        onError,

        id,
        action,
        response,
        showDataResponse: response,
    };
}


export default useFormLogic;