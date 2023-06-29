<section class="product__details--section section--padding">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <img src="{{ getImage($product->image_url) }}" class="img img-fluid mb-4" alt="">
            </div>
            <div class="col-md-7">
                <h3 class="product__details--info__title text-center text-sm-start mb-15">
                    {{ Str::upper($product->name) }}
                </h3>
                <div class="product__details--info">
                    <form action="#">
                        <div class="product__details--info__price mt-3 mb-10">
                            <span class="current__price">{{ $product->formatted_price }}</span>
                            {{-- <span class="old__price">$320.00</span> --}}
                        </div>
                        <div class="product__details--info__desc mb-15">
                            {!! $product->short_description !!}
                        </div>

                       
                        <div class="product__variant">
                            <div class="product__variant--list quantity d-flex align-items-center mb-20">
                                <div class="quantity__box">
                                    <button type="button" class="quantity__value quickview__value--quantity decrease"
                                        aria-label="quantity value" value="Decrease Value">-</button>
                                    <label>
                                        <input type="number" class="quantity__number quickview__value--number"
                                            value="1" data-counter />
                                    </label>
                                    <button type="button" class="quantity__value quickview__value--quantity increase"
                                        aria-label="quantity value" value="Increase Value">+</button>
                                </div>

                                <button class="quickview__cart--btn primary__btn" type="button">
                                    Ajouter AuPanier
                                </button>

                            </div>
                            <div class="product__variant--list mb-15">
                                <button class="variant__buy--now__btn primary__btn" type="submit">
                                    Achetez-le maintenant
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>