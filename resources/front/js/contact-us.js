import http from "@/common/http";
import Swal from "sweetalert2";

$(document).ready(function () {
    $("form#contact__form").submit(function (e) {
        e.preventDefault();

        $(".error").html("");
        $("#submit-contact-button").prop("disabled",true);
        
        const data = {};
        const form = $(this);
        
        form.serializeArray().map(input => { data[input.name] = input.value; });

        http.post("/contact-us", data)
            .then(res => {
                Swal.fire({
                    title: "Succès",
                    text: res.data.message,
                    icon: "success",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "D'accord",
                });

                form[0].reset();
            })
            .catch(err => {
                const errors = err?.response?.data?.errors ?? [];

                for (const key in errors) {
                    $(`#error-${key}`).html(errors[key][0]);
                }
            })
            .finally(()=> $("#submit-contact-button").prop("disabled",false));
    })
})