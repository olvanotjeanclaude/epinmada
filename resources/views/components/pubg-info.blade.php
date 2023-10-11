<div class="pubg-info">
    <div class="product__details--info__price mt-3 mb-10">
        <span class="current__price">{{ $epin->formatted_price }}</span>
        {{-- <span class="old__price">$320.00</span> --}}
    </div>
    <p class="product__details--info__desc mb-15">
        {!! $epin->short_description !!}
        {!! $epin->long_description??$epin->category?->description !!}
    </p>
   
    <div class="product__variant">
        <div class="product__variant--list quantity d-flex align-items-center mb-20">
            <button class="product__card--btn primary__btn"  data-product-id="{{ $epin->unique_id }}">
                Ajouter Au Panier
            </button>
        </div>
        
        <x-button-buy-product :product="$epin" />
    </div>

    {{-- <div class="guarantee__safe--checkout">
        <h5 class="guarantee__safe--checkout__title">Guaranteed Safe Checkout</h5>
        <img class="guarantee__safe--checkout__img" src="assets/img/other/safe-checkout.webp"
            alt="Payment Image">
    </div> --}}
</div>
