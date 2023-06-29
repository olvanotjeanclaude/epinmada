import { Cookie } from "../../front/Cookie.js";
import { Axios, settingAnonymousID } from "./helper.js";

$(document).ready(function () {
    settingAnonymousID();

    $(".product__card--btn").click(addProductToBasket);

    $(document).on("click", "#loadShopCardData .remove-product", removeProductFromBasket)

});

function addProductToBasket() {
    const anonymousID = Cookie.get("anonymousID");
    const product_id = $(this).data("product-id");

    const basket = {
        anonymous_id: anonymousID,
        product_id,
        quantity: 1
    };

    Axios().post("/baskets", basket).then(response => setShopCardHtml(response));
}

function removeProductFromBasket() {
    const product_id = $(this).data("product-id");
    Axios().delete(`/baskets/${product_id}`).then(response => { setShopCardHtml(response) });
}

function setShopCardHtml({ data }) {
    $("#countBasket").text(data.count);
    $("#loadShopCardData").html(data.html)
}