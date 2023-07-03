import { basketHtml } from "./basket-template.js";
import { Axios } from "./helper.js";

$(document).ready(function () {
    Axios().get(`/baskets`).then(({ data }) => {
        $("#loadBaskets").html(basketHtml(data))
    });
})

