import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const useProductForm = (product) => {
    const schema = yup.object({
        name: yup.string().required("le nom ne peut pas être vide"),
        short_description: yup.string().required('Brève Description ne peut pas être vide'),
        price: yup.string().required("Prix ne peut pas être vide"),
        category: yup.string().required("Catégorie ne peut pas être vide"),
        long_description: yup.string(),
        // file: yup.string().required("ooo")
    }).required();


    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            short_description: "",
            price: "",
            category: "",
            long_description: "",
        },
    });

    useEffect(() => {
        const inputs = Object.keys(form.getValues());

        if (product) {
            Object.entries(product ?? {})
                .filter(([inputName]) => inputs.includes(inputName))
                .map(([inputName]) => form.setValue(inputName, product[inputName]));

            form.setValue("id", product.id)
            form.setValue("category", product.category_id)
        }

    }, [form, product]);

    return {
        ...form,
        errors: form.formState.errors,
    };
}

export default useProductForm;