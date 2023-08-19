import Swal from "sweetalert2";

$(document).ready(function () {
    $("#loginForm").submit(async function (e) {
        e.preventDefault();
        const data = {
            email: $("input[type='email']").val(),
            password: $("input[type='password']").val(),
        };

        await axios.post("/api/login", data, {
            headers: {
                "Accept": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "withCredentials": true,
                "Content-Type": "application/json",
            }
        })
            .then(res => {
                const user = res.data.user;
                if (user) {
                    if (user.type == "admin" || user.type == "staff") {
                        return location.href = "/admin"
                    }

                    return location.href = "/u";
                }
            })
            .catch(e => {
                const response = e.response;
                const { message } = response.data;

                let text;

                switch (response.status) {
                    case 401:
                        text = message;
                        break;
                    case 422:
                        text = "Veuillez remplir les champs requis";
                        break;
                    case 500:
                        text = "Erreur du serveur";
                        break;
                    default:
                        text = "Erreur inconnue. Réessayez plus tard."
                        break;
                }


                Swal.fire({
                    title: "Erreur",
                    text,
                    icon: "error",

                    confirmButtonColor: '#D72323',
                    confirmButtonText: "D'accord",
                })
            })
    });

});