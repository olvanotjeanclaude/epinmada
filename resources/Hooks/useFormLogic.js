import { useParams } from "react-router-dom";
import useQueryApi from "./useQueryApi";

const useFormLogic = (path, baseApiUrl, useDataForm) => {
    const { id } = useParams();

    const queryApi = useQueryApi(path, baseApiUrl, `/${path}`);

    const action = id ? "update" : "store";

    const response = id == undefined ? null : showData(id);

    const dataForm = useDataForm(response?.data);

    return {
        ...dataForm,
        ...queryApi,
        
        id,
        action,
        response,
        showDataResponse: response
    };
}


export default useFormLogic;