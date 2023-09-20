import { Axios } from "./helper.js";
import { sidebarShopCartHtml } from "./basket-template.js";
import { mountToBasketElement } from "./basket.js";

$(document).ready(function () {
    loadSidebarShopCart();

    $(document).on("click", ".product__card--btn", addProductToBasket);

    $(document).on("click", "#loadShopCardData .remove-product", removeProductFromBasket)

    $(document).on("click", "button.custom-increase", computateQuantity);

    $(document).on("click", "button.custom-decrease", computateQuantity);

    $(document).on("click", "button.quantity__value", updateQuantity);
});

export function updateQuantity() {
    const input = $(this).parent().find(".quantity__number");
    const quantity = input.val();
    const basketID = input.data("id");
    const action = input.attr("action");

    Axios().post(`/update-quantity/${basketID}`, {
        quantity,
        action,
       basketID
    }).then(response => {
        setShopCartHtml(response);

        if (hasCartTable()) {
            mountToBasketElement(response);
        }
    });
}

export function computateQuantity() {
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

    Axios().post("/baskets", basket).then(response => setShopCartHtml(response));
}

function removeProductFromBasket() {
    const basketID = $(this).data("id");
    Axios().delete(`/baskets/${basketID}`).then(response => { setShopCartHtml(response) });
}

export function setShopCartHtml({ data }) {
    $("#countBasket").text(data.count);
    $("#loadShopCardData").html(sidebarShopCartHtml(data))

    if (!hasCartTable()) {
        $(".offCanvas__minicart").addClass("active");
    }
}

function loadSidebarShopCart() {
    Axios().get(`/baskets`).then(response => {
        setShopCartHtml(response);
        $(".offCanvas__minicart").removeClass("active");
    });
}

function hasCartTable() {
    return $(".cart__table--body__list").length > 0;
}