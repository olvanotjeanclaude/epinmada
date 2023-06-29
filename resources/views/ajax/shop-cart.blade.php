<div id="main-basket" tabindex="-1" data-count-basket="{{ $baskets->count() }}">
    @if (count($baskets))
        <div class="minicart__product">
            @foreach ($baskets as $product)
                @php
                    $slug = Str::slug($product->name);
                    
                    if ($product->category != 'EPIN') {
                        $slug = Str::slug($product->category);
                    }
                @endphp
                <div class="minicart__product--items d-flex">
                    <div class="minicart__thumbnail">
                        <a href="{{ route('front.getProducts', $slug) }}">
                            <img src="{{ $product->image_url }}" alt="prduct-img">
                        </a>
                    </div>
                    <div class="minicart__text">
                        <h4 class="minicart__subtitle"><a
                                href="{{ route('front.getProducts', $slug) }}">{{ $product->name }}</a></h4>
                        <span class="color__variant"><b>Catégorie:</b>{{ $product->category }}</span>
                        <div class="minicart__price">
                            <span class="current__price">{{ formatPrice($product->price) }}</span>
                            {{-- <span class="old__price">$140.00</span> --}}
                        </div>
                        <div class="minicart__text--footer d-flex align-items-center">
                            <div class="quantity__box minicart__quantity">
                                <button type="button" class="quantity__value decrease custom-decrease"
                                    aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number" class="quantity__number" value="{{ $product->quantity }}"
                                        data-counter />
                                </label>
                                <button type="button" class="quantity__value increase custom-increase"
                                    aria-label="quantity value" value="Increase Value">+</button>
                            </div>
                            <button class="minicart__product--remove remove-product" aria-label="minicart remove btn"
                                data-product-id="{{ $product->unique_id }}">Retirer</button>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

        <div class="minicart__amount">
            <div class="minicart__amount_list d-flex justify-content-between">
                <span>Total:</span>
                <span><b>{{ formatPrice($baskets->sum('sub_amount')) }}</b></span>
            </div>
        </div>
        <div class="minicart__button d-flex justify-content-center mt-4">
            <a class="primary__btn minicart__button--link" href="cart.html">Voir le panier</a>
            <a class="primary__btn minicart__button--link" href="checkout.html">Payer</a>
        </div>
    @else
        <p>le panier est vide</p>
    @endif
</div>
