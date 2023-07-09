import { basketHtml } from "./basket-template.js";
import { Axios } from "./helper.js";
import { computateQuantity, setShopCartHtml } from "./product.js";

$(document).ready(function () {
    loadBasket();

    $(document).on("click", ".basket-increase", computateQuantity);

    $(document).on("click", ".basket-decrease", computateQuantity);

    $(document).on("click", ".cart__remove--btn", removeBasket);
})

function loadBasket() {
    Axios().get(`/baskets`).then(response => mountToBasketElement(response));
}

function removeBasket() {
    const product = $(this).data("id");
    Axios().delete(`/baskets/${product}`).then(response => mountToBasketElement(response));
}

export function mountToBasketElement(response) {
    setShopCartHtml(response);
    $("#loadBaskets").html(basketHtml(response.data));
    $(".cart__summary--amount").html(response.data.sum_sub_amount)
}