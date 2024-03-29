import { Axios, alertToastr } from "./helper.js";
import { sidebarShopCartHtml } from "./basket-template.js";
import { mountToBasketElement } from "./basket.js";

$(document).ready(function () {
    loadSidebarShopCart();

    $(document).on("click", ".product__card--btn", addProductToBasket);

    $(document).on("click", "#loadShopCardData .remove-product", removeProductFromBasket)

    $(document).on("click", "button.custom-increase", computateQuantity);

    $(document).on("click", "button.custom-decrease", computateQuantity);

    $(document).on("click", "button.quantity__value", updateQuantity);

    $(document).on("click", "button#buy-now-button", buyProductNow);

    $(document).on("click", "button#checkout", checkout);
});

function checkout() {
    const auth = $("body").data("auth");
    const url = "/u/my-basket";

    if (auth) {
        location.href = url;
    }
    else {
        localStorage.setItem("redirectTo", url);
        location.href = "/sign-in";
    }
}

function buyProductNow() {
    addProductToBasket.bind(this)();
    window.location.replace("/u/my-basket");
}

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

    Axios().post("/baskets", { product_id })
        .then(response => {
            setShopCartHtml(response)
            alertToastr().success(`<span>Le produit a été ajouté avec succès au panier</span>
        <a href="/panier" class='link' target="_blank">Aller au panier</a>`);
        }).catch(e => {
            alertToastr().error("Erreur innconue");
        });
}

function removeProductFromBasket() {
    const basketID = $(this).data("id");
    Axios().delete(`/baskets/${basketID}`).then(response => { setShopCartHtml(response) });
}

export function setShopCartHtml({ data }) {
    $("#countBasket").text(data.count);
    $("#loadShopCardData").html(sidebarShopCartHtml(data))

    // if (!hasCartTable()) {
    //     $(".offCanvas__minicart").addClass("active");
    // }
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