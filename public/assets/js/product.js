import { Axios, settingAnonymousID } from "./helper.js";
import { sidebarShopCartHtml } from "./basket-template.js";

$(document).ready(function () {
    loadSidebarShopCart();

    settingAnonymousID();

    $(".product__card--btn").click(addProductToBasket);

    $(document).on("click", "#loadShopCardData .remove-product", removeProductFromBasket)

    $(document).on("click", ".custom-increase", computateQuantity);

    $(document).on("click", ".custom-decrease", computateQuantity);

    $(document).on("click", ".quantity__value", updateQuantity);
});

export function updateQuantity() {
    const input = $(this).parent().find(".quantity__number");
    const quantity = input.val();
    const unique_id = input.data("id");
    const action = input.attr("action");

    Axios().post(`/update-quantity/${unique_id}`, {
        quantity,
        action,
        product: unique_id
    }).then(response => { setShopCardHtml(response) });
}

function computateQuantity() {
    const input = $(this).parent().find(".quantity__number");
    const isAdding = $(this).hasClass("increase");


    let value = parseInt(input.val());
    value = isNaN(value) ? 0 : value;

    if (isAdding) {
        input.attr("action", "increase");
        value++;
    }
    else {
        input.attr("action", "decrease");
        value--;
    }

    value < 1 ? (value = 1) : "";

    input.val(value);
}


function addProductToBasket() {
    const product_id = $(this).data("product-id");

    const basket = {
        product_id,
    };

    Axios().post("/baskets", basket).then(response => setShopCardHtml(response));
}

export function removeProductFromBasket() {
    const product_id = $(this).data("product-id");
    Axios().delete(`/baskets/${product_id}`).then(response => { setShopCardHtml(response) });
}

function setShopCardHtml({ data }) {
    $(".offCanvas__minicart").addClass("active");
    $("#countBasket").text(data.count);
    $("#loadShopCardData").html(sidebarShopCartHtml(data))
}

function loadSidebarShopCart() {
    Axios().get(`/baskets`).then(response => {
        setShopCardHtml(response);
        $(".offCanvas__minicart").removeClass("active");
    });
}