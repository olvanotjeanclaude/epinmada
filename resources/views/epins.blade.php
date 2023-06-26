@extends('layout.front')

@section('title')
    {{ $category->name }}
@endsection

@section('content')
    <!-- Start breadcrumb section -->
    <section class="breadcrumb__section breadcrumb__bg">
        <div class="container">
            <div class="row row-cols-1">
                <div class="col">
                    <div class="breadcrumb__content">
                        <h1 class="breadcrumb__content--title mb-10">PUBG Mobile</h1>
                        <ul class="breadcrumb__content--menu d-flex">
                            {{-- <li class="breadcrumb__content--menu__items"><a href="index.html">Home</a></li> --}}
                            <li class="breadcrumb__content--menu__items"><span class="text__secondary">Achetez l'UC</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End breadcrumb section -->

    <!-- Start product details section -->
    <section class="product__details--section section--padding">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-md-2 row-cols-1">
                <div class="col-sm-6 col-md-7">
                    <h3 class="product__details--info__title text-center text-sm-start mb-15">
                        {{ Str::upper($selectedEpin->name) }}
                    </h3>

                    <img src="{{ getImage($selectedEpin->image_url) }}" class="img img-fluid" alt="">
                    <br>
                    <div class="product__details--info">
                        <form action="#">
                            <div class="product__details--info__price mt-3 mb-10">
                                <span class="current__price">{{ $selectedEpin->formatted_price }}</span>
                                {{-- <span class="old__price">$320.00</span> --}}
                            </div>
                            <p class="product__details--info__desc mb-15">Options de paiement:</p>
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

                                    {{-- <button class="quickview__cart--btn primary__btn" type="submit">Ajouter Au Panier</button> --}}

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
                        </form>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5">
                    <div class="single__widget widget__bg">
                        <h2 class="widget__title position__relative h3">Autre Produits</h2>
                        <div class="product__sidebar">
                            @forelse ($products as $product)
                                <div class="small__product  d-flex align-items-center mb-20">
                                    <div class="small__product--thumbnail position__relative">
                                        <a class="small__product--link display-block"
                                            href="{{ route('front.getEpin', $product->slug) }}">
                                            <img class="small__product--img display-block"
                                                src="{{ getImage($product->image_url) }}" alt="product-img">
                                        </a>
                                    </div>
                                    <div class="small__product--content">
                                        <h3 class="small__product--title h4">
                                            <a href="{{ route('front.getEpin', $product->slug) }}">
                                                {{ $product->name }}
                                            </a>
                                        </h3>
                                        <div class="small__product--price">
                                            <span class="current__price">{{ formatPrice($product->price) }}</span>
                                            {{-- <span class="price__divided"></span> --}}
                                            {{-- <span class="old__price"> $356</span> --}}
                                        </div>
                                    </div>
                                </div>
                                {{-- <div style="border: 1px solid #e4e4e4" class="mb-2"></div> --}}
                            @empty
                                Aucun produit associé à afficher
                            @endforelse
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End product details section -->

    <!-- Start product details tab section -->
    <section class="product__details--tab__section section--padding d-none">
        <div class="container">
            <div class="row row-cols-1">
                <div class="col">
                    <ul class="product__tab--one product__details--tab d-flex mb-30">
                        <li class="product__details--tab__list active" data-toggle="tab" data-target="#description">
                            Description</li>
                        <li class="product__details--tab__list" data-toggle="tab" data-target="#reviews">Product Reviews
                        </li>
                        <li class="product__details--tab__list" data-toggle="tab" data-target="#information">Additional
                            Info</li>

                    </ul>
                    <div class="product__details--tab__inner border-radius-10">
                        <div class="tab_content">
                            @include('include.single-product-tab.description')

                            <div id="reviews" class="tab_pane">
                                @include('include.single-product-tab.reviews')
                            </div>

                            <div id="information" class="tab_pane">
                                @include('include.single-product-tab.information')
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End product details tab section -->
@endsection
