<div class="pubg-info">
    <div class="product__details--info__price mt-3 mb-10">
        <span class="current__price">{{ $epin->formatted_price }}</span>
        {{-- <span class="old__price">$320.00</span> --}}
    </div>
    <p class="product__details--info__desc mb-15">
        PubG Mobile, développé par Tencent Games en utilisant Unreal Engine 4 tout comme la version ordinateur, a pris
        sa place parmi les jeux "Battleground" les plus populaires au monde. La production, qui est révolutionnaire dans
        le monde mobile, est toujours la même dans toutes ses fonctionnalités que dans l'environnement PC.

        Dans le jeu, vous pouvez équiper vos armes et votre personnage d'un costume, etc. Comme vous pouvez ajouter des
        fonctionnalités, vous pouvez également profiter de vos concurrents avec des options telles que Royale Pass.
    </p>
   
        <p class="product__details--info__desc mb-15">Options de paiement:</p>
    <div class="product__variant">
        <div class="product__variant--list quantity d-flex align-items-center mb-20">
            <div class="quantity__box">
                <button type="button" class="quantity__value quickview__value--quantity decrease"
                    aria-label="quantity value" value="Decrease Value">-</button>
                <label>
                    <input type="number" class="quantity__number quickview__value--number" value="1"
                        data-counter />
                </label>
                <button type="button" class="quantity__value quickview__value--quantity increase"
                    aria-label="quantity value" value="Increase Value">+</button>
            </div>

            <button class="quickview__cart--btn primary__btn" type="submit">Ajouter Au Panier</button>

        </div>
        <div class="product__variant--list mb-15">
            <button class="variant__buy--now__btn primary__btn" type="submit">
                Achetez-le maintenant
            </button>
        </div>
    </div>

    {{-- <div class="guarantee__safe--checkout">
        <h5 class="guarantee__safe--checkout__title">Guaranteed Safe Checkout</h5>
        <img class="guarantee__safe--checkout__img" src="assets/img/other/safe-checkout.webp"
            alt="Payment Image">
    </div> --}}
</div>
