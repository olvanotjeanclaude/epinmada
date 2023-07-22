import { useParams } from "react-router-dom";
import useQueryApi from "./useQueryApi";

const useFormLogic = (path, apiUrl, useDataForm) => {
    const { id } = useParams();

    const queryApi = useQueryApi(apiUrl, `/${path}`);

    const action = id ? "update" : "store";

    const response = id == undefined ? null : showData(id);

    const dataForm = useDataForm(response?.data);

    const submitForm = (data) => {
        const onError = () => {
            dataForm.errors?.forEach(({ name, type, message }) => {
                setError(name, { type, message })
            });
        }

        switch (action) {
            case "store":
                queryApi.addMutation.mutate(data, { onError });
                break;

            case "update":
                queryApi.updateMutation.mutate((data), { onError });
                break;

            default:
                break;
        }
    }

    return {
        ...dataForm,
        ...queryApi,
        submitForm,
        id,
        action,
        response,
        showDataResponse: response,
    };
}


export default useFormLogic;