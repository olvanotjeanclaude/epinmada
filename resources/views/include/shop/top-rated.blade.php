<div class="single__widget widget__bg">
    <h2 class="widget__title position__relative text-capitalize h3">Le produit le plus apprécié</h2>
    <div class="product__sidebar">
        @foreach ($tops as $top)
            <div class="small__product d-flex align-items-center mb-20">
                <div class="small__product--thumbnail position__relative">
                    <a class="small__product--link display-block" href="{{ $top->route_detail }}">
                        <img class="small__product--img display-block" src="{{ $top->image_url }}" alt="product-img">
                    </a>
                </div>
                <div class="small__product--content">
                    <h3 class="small__product--title h4">
                        <a href="{{ $top->route_detail }}">{{ $top->name }}</a>
                    </h3>
                    <div class="small__product--price">
                        <span class="current__price">{{ $top->formatted_price }}</span>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>
