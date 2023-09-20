import axios from "axios";

$(document).ready(function () {
    $("#sign-up-form").submit(async function (e) {
        e.preventDefault();
        $(".error").html("");

        const data = {};

        $(this).serializeArray().map(input => { data[input.name] = input.value; });

        await axios.post("/api/sign-up", data)
            .then(res => {
                localStorage.setItem('signupMessage', res.data.message);
                window.location.href = "/sign-in"
            })
            .catch(err => {
                const errors = err.response.data.errors;

                for (const key in errors) {
                    $(`#error-${key}`).html(errors[key][0]);
                }
            });
    });
});