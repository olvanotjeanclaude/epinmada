import { useBasket } from "@/user/context/BasketContextProvider";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { confirmButton } from "@/admin/Helper/sweetAlert";
import usePaymentMutation from "./usePaymentMutation";
import Swal from "sweetalert2";
import http from "@/common/http";

export const successPaymentMessage = {
    icon: "success",
    title: "Success",
    titleText: "Paiement effectué avec succès",
    ...confirmButton
};

export const errorPaymentMessage = {
    icon: "error",
    title: "Erreur",
    titleText: "Paiement échoué. Veuillez répéter plus tard.",
    ...confirmButton
};

const usePayment = () => {
    const queryClient = useQueryClient();
    const basketData = useBasket();
    const baskets = basketData.data?.baskets;
    const [paymentResult, setPaymentResult] = useState({ isLoading: false, data: null });
    const { payMutation } = usePaymentMutation();

    const isBasketHasPUBG = baskets?.filter(({ product }) => {
        return product.category.name.toLowerCase() == "epin"
    }).length > 0;

    const apiNotReady =() =>{
        Swal.fire({ icon: "info", title: "Message", titleText: "Payment API not yet ready", ...confirmButton })
        setPaymentResult(prev => ({ ...prev, isLoading: false }));
    }

    const {
        register,
        handleSubmit,
        setValue, getValues,
        formState: { errors, isValid } } = useForm({
            defaultValues: {
                pubg_id: "",
                paymentMethod: "",
                payment_phone_number: ""
            }
        });

    const fetchTransaction = async (data,checkPayment) => {
        const transaction = await http.get(`mvola/transactions/${data.serverCorrelationId}`)
            .then(res => res.data)
            .catch((e) => {
                Swal.fire(errorPaymentMessage);
                clearInterval(checkPayment);
            });

        if (transaction?.status == "completed" || transaction?.status == "failed") {
            setPaymentResult({ data: transaction, isLoading: false });
            clearInterval(checkPayment);
            queryClient.invalidateQueries("front.baskets");
            Swal.fire(successPaymentMessage);
        }
    }

    const handleMvolaPayment = data => {
        payMutation.mutate({ ...data, endpoint: "/mvola/initiate-transaction" }, {
            onSuccess(data) {
                const checkPayment = setInterval(async () => {
                    await fetchTransaction(data,checkPayment);
                }, 5000);
            },
            onError(error) {
                Swal.fire(errorMessage)
                setPaymentResult({ data: error, isLoading: false });
            }
        });
    }

    return {
        handleMvolaPayment,
        baskets, basketData,
        paymentResult,setPaymentResult,
        isBasketHasPUBG,
        register, handleSubmit, setValue, getValues, errors, isValid,
        formState: {errors,isValid},
        apiNotReady
    }
}

export default usePayment;