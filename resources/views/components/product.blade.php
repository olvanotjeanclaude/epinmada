<article class="product__card">
    <a href="{{ $product->route_detail }}" class="d-block">
        <div class="product__card--thumbnail">
            <img class="product__card--thumbnail__img product__primary--img display-block"
                src="{{ getImage($product->image_url) }}" alt="product-img">
            <img class="product__card--thumbnail__img product__secondary--img display-block"
                src="{{ getImage($product->image_url) }}" alt="product-img">
        </div>
    </a>
    <div class="product__card--content text-center">
        <span class="product__card--meta__tag">{{ $product->category->name }}</span>
        <h3 class="product__card--title"><a href="{{ $product->route_detail }}">{{ $product->name }} </a></h3>
        <div class="product__card--price">
            <span class="current__price">{{ $product->formatted_price }}</span>
            {{-- <span class="price__divided"></span>
            <span class="old__price"> $356</span> --}}
        </div>
        <a class="product__card--btn primary__btn" href="#">
            Ajouter Au Panier
        </a>
    </div>
</article>
