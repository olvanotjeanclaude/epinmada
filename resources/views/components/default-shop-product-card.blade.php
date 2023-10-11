<h3 class="product__details--info__title text-center text-sm-start mb-15">
    {{ Str::upper($product->name) }}
</h3>

<div class="row">
    <div class="col-sm-5">
        <img src="{{ getImage($product->image_url) }}" class="img img-fluid" alt="">
    </div>
    <div class="col-sm-7">
        <div class="product__details--info__price mt-3 mb-10">
            <span class="current__price">{{ $product->formatted_price }}</span>
            {{-- <span class="old__price">$320.00</span> --}}
        </div>
        <div class="product__details--info__desc mb-15">
            {!! $product->short_description !!}
            {!! $product->long_description !!}
        </div>

        <div class="product__variant">
            <div class="product__variant--list quantity d-flex align-items-center gap-2 mb-20">
                <button class="product__card--btn primary__btn" data-product-id="{{ $product->unique_id }}">
                    Ajouter Au Panier
                </button>
            </div>
            <x-button-buy-product :product="$product" />
        </div>
    </div>
</div>
