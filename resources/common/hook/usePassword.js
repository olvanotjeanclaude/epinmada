import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";
import http from "../http";

const usePassword = () => {
    const _updatePassword = async (data) => {
        return http.post("/update-password", data)
            .then(res => res.data)
            .catch(e => { throw e.message });
    }

    const passwordMutation = useMutation({
        mutationFn: async (data) => await _updatePassword(data),
        mutationKey: "updatePassword"
    });

    const schema = yup.object({
        password: yup.string().required("Entrer le mot de passe"),
        password_confirmation: yup.string().required("Confirmer le mot de passe"),
    }).required();

    const form = useForm({
        resolver: yupResolver(schema)
    });

    return {
        passwordMutation,
        ...form
    };
}

export default usePassword;