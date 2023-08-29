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
                        <h1 class="breadcrumb__content--title mb-10">{{ Str::upper($category->name) }}</h1>
                        <ul class="breadcrumb__content--menu d-flex">
                            <li class="breadcrumb__content--menu__items text-capitalize"><a href="/">page d'accueil</a>
                            </li>
                            <li class="breadcrumb__content--menu__items">
                                <span class="text__secondary"> Achetez {{ Str::title($selected?->name) }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End breadcrumb section -->

    <div class="container">
        <section class="product__details--section my-5">
            @switch(Str::lower($category->name))
                @case('epin')
                    <x-pubg-card :epin="$selected" />
                @break

                @default
                    <x-default-shop-product-card :product="$selected" />
                    <x-product-detail-tab />
            @endswitch
        </section>
        <div class="row d-none mb-4">
            @forelse ($products as $product)
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="small__product  d-flex align-items-center">
                                <div class="small__product--thumbnail position__relative">
                                    <a class="small__product--link display-block"
                                        href="{{ route('front.getProduct', [$category->slug, $product->slug]) }}">
                                        <img class="small__product--img display-block"
                                            src="{{ getImage($product->image_url) }}" alt="product-img">
                                    </a>
                                </div>
                                <div class="small__product--content">
                                    <h3 class="small__product--title h4">
                                        <a href="{{ route('front.getProduct', [$category->slug, $product->slug]) }}">
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
                        </div>
                    </div>
                </div>
            @empty
                Aucun produit associé à afficher
            @endforelse
        </div>
        <section class="mb-5">
            <h2 class="widget__title position__relative h3">Autre Produits</h2>

            @foreach ($products as $product)
                <article class="product__card product__card--list my-4 d-flex">
                    <a href="{{ route('front.getProduct', [$category->slug, $product->slug]) }}" style="width: 300px;">
                        <img style="height: 100%" src="{{ getImage($product->image_url) }}" alt="product-img">
                    </a>

                    <div class="product__card--content product__card--list__content">
                        <span class="product__card--meta__tag"> {{ Str::upper($category->name) }} </span>
                        <h3 class="product__card--title">
                            <a href="{{ route('front.getProduct', [$category->slug, $product->slug]) }}">
                                {{ $product->name }}
                            </a>
                        </h3>
                        <div class="product__card--price">
                            <span class="current__price">{{ formatPrice($product->price) }}</span>
                            {{-- <span class="price__divided"></span> --}}
                            {{-- <span class="old__price"> $340</span> --}}
                        </div>

                        <p class="product__list--items__content--desc mb-20">
                            {!!  $product->short_description ?? $category->description  !!}
                        </p>

                        <button class="product__card--btn primary__btn" data-product-id="{{ $product->unique_id }}">
                            Ajouter Au Panier
                        </button>
                    </div>
                </article>
            @endforeach
        </section>
    </div>
@endsection
