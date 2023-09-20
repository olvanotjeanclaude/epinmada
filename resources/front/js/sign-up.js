
$(document).ready(function () {
    $("#sign-up-form").submit(async function (e) {
        e.preventDefault();

        const data = {};

        $(this).serializeArray().map(input => { data[input.name] = input.value; });

        await axios.post("/api/sign-up", data)
            .then(res => {
            })
            .catch(err => {
                const errors = err.response.data.errors;

                for(const key in errors){
                    console.log(errors[key][0])
                    $(`#error-${key}`).html(errors[key][0]);
                }

            //    console.log(errors);
              
            });
    });
});