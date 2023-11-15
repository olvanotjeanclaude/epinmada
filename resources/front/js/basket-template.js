export function sidebarShopCartHtml({ baskets, sum_sub_amount }) {
    let html = `<div id="main-basket" tabindex="-1" data-count-basket="${baskets.length ?? 0}">`;

    if (Array.isArray(baskets) && baskets.length) {
        html = baskets.map(basket => {
            const product = basket.product;
            const category = product.category;
            return `
                    <div class="minicart__product">
                        <div class="minicart__product--items d-flex">
                            <div class="minicart__thumbnail">
                                <a href="${product.route_detail}">
                                    <img src="${product.image_url}" alt="prduct-img">
                                </a>
                            </div>
                            <div class="minicart__text">
                                <h4 class="minicart__subtitle">
                                    <a href="${product.route_detail}">${product.name}</a>
                                </h4>
                                <span class="color__variant"><b>Catégorie:</b>${category.name}</span>
                                <div class="minicart__price">
                                    <span class="current__price">${(product.formatted_price)}</span>
                                </div>
                                <div class="minicart__text--footer d-flex align-items-center">
                                    <div class="quantity__box minicart__quantity">
                                        <button type="button" class="quantity__value decrease custom-decrease"
                                            aria-label="quantity value" data-id="" value="Decrease Value">-</button>
                                        <label>
                                            <input type="number" class="quantity__number" data-id="${basket.id}"
                                                value="${basket.quantity}" data-counter />
                                        </label>
                                        <button type="button" class="quantity__value increase custom-increase"
                                            aria-label="quantity value" value="Increase Value">+</button>
                                    </div>
                                    <button class="minicart__product--remove remove-product" aria-label="minicart remove btn"
                                        data-id="${basket.id}">Retirer</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }).join("");

        html += (`<div class="minicart__amount">
                        <div class="minicart__amount_list d-flex justify-content-between">
                            <span>Total:</span>
                            <span><b>${sum_sub_amount}</b></span>
                        </div>
                    </div>`);

        html += (`<div class="minicart__button d-flex justify-content-center mt-4">
                        <a class="primary__btn minicart__button--link" href="/panier">Voir le panier</a>
                        <button class="primary__btn minicart__button--link" id="checkout">Payer</button>
                    </div>`);
    }
    else {
        html = `<p>le panier est vide</p>`;
    }

    html += "</div>";

    return html;
}

export function basketHtml({ baskets, sum_sub_amount }) {
    let html = "";

    // console.log(baskets)
    if (Array.isArray(baskets) && baskets.length) {
        html = "";

        html += baskets.map(basket => {
            const product = basket.product;
            const category = product.category;
            

            return `
            <tr class="cart__table--body__items">
                <td class="cart__table--body__list">
                    <div class="cart__product d-flex align-items-center">
                        <button data-id="${basket.id}" class="cart__remove--btn" aria-label="search button"
                            type="button"><svg fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                width="16px" height="16px">
                                <path
                                    d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                            </svg></button>
                        <div class="cart__thumbnail">
                            <a href="${product.route_detail}">
                                <img style="height:50px; width:50px" class="border-radius-5" src="${product.image_url}"
                                    alt="cart-product">
                            </a>
                        </div>
                        <div class="cart__content">
                            <h3 class="cart__content--title h4">
                            <a href="${product.route_detail}">
                                    ${product.name}
                                </a>
                            </h3>
                        </div>
                    </div>
                </td>
                <td class="cart__table--body__list">
                    <span class="cart__price">${product.formatted_price}</span>
                </td>
                <td class="cart__table--body__list">
                    <div class="quantity__box">
                        <button type="button"
                            class="quantity__value quickview__value--quantity decrease basket-decrease"
                            aria-label="quantity value" value="Decrease Value">-</button>
                        <label>
                            <input type="number"
                                data-id="${basket.id}"
                                class="quantity__number quickview__value--number"
                                value="${basket.quantity}" data-counter />
                        </label>
                        <button type="button"
                            class="quantity__value quickview__value--quantity increase basket-increase"
                            aria-label="quantity value" value="Increase Value">
                            +
                        </button>
                    </div>
                </td>
                <td class="cart__table--body__list">
                    <span class="cart__price end">
                        ${basket.formatted_sub_amount}
                    </span>
                </td>
            </tr>`
        }).join("");
    }
    else {
        html = `<tr class="bg-light">
                    <td colspan="4" class="p-3">Votre panier est vide!</td>
                </tr>`;
    }

    return html;
}