import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import useFetchConstants from "./useFetchConstants";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const useUserForm = (user) => {
    const { user_types } = useFetchConstants();

    const schema = yup.object({
        type: yup.string().required('Selectionnez le rôle'),
        name: yup.string().required("le nom ne peut pas être vide"),
        surname: yup.string().required("le prénom ne peut pas être vide"),
        phone: yup.string().required("Téléphone ne peut pas être vide"),
        email: yup.string().email("Email invalide").required("Email ne peut pas être vide"),
        password: user ? null : yup.string().required("le mot de passe ne peut pas être vide"),
        password_confirmation: user ? null : yup.string().required('La confirmation du mot de passe est requise')
            .oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre'),
    }).required()

    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            type: "",
            name: "",
            surname: "",
            phone: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    useEffect(() => {
        const inputs = Object.keys(form.getValues());

        if (user) {
            Object.entries(user ?? {})
                .filter(([inputName]) => inputs.includes(inputName))
                .map(([inputName]) => form.setValue(inputName, user[inputName]));

            form.setValue("id", user.id)
        }

    }, [user]);

    return {
        ...form,
        errors: form.formState.errors,
        user_types,
    };
}

export default useUserForm;