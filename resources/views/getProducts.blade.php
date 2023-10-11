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

        <section class="mb-5">
            <h2 class="widget__title position__relative h3">Autre Produits</h2>
            <style>
                .long-text-truncate {
                    display: -webkit-box;
                    /* max-width: 200px; */
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .product__card--list {
                    margin-bottom: 4rem;
                    gap: 10px;
                }

                .product__card--list .img-container {
                    width: 25rem;
                    height: 22.5rem;
                }

                img {
                    height: 100%;
                    width: 100%;
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: cover;
                }

                @media only screen and (min-width: 993px) {
                    .product__details--section .img-container {
                        height: 400px;
                        max-height: 100%;
                    }
                }

                @media only screen and (max-width: 576px) {
                    .product__card--list .img-container {
                        width: 15rem;
                        height: 20rem;
                    }

                    .product__card--list__content {
                        text-align: left;
                    }

                    .product__card--list {
                        flex-direction: row;
                        overflow: hidden;
                    }
                }
            </style>
            @foreach ($products as $product)
                <article class="product__card product__card--list  d-flex">
                    <a href="{{ route('front.getProduct', [$category->slug, $product->slug]) }}">
                        <div class="img-container">
                            <img src="{{ getImage($product->image_url) }}" alt="product-img">
                        </div>
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

                        <div class="product__list--items__content--desc long-text-truncate mb-20">
                            <p>{!! strip_tags($product->short_description) !!}</p>
                            <div class="d-none d-sm-block">{!! strip_tags($product->long_description ?? $category->description) !!}</div>
                        </div>

                        <button class="product__card--btn primary__btn" data-product-id="{{ $product->unique_id }}">
                            Ajouter Au Panier
                        </button>
                    </div>
                </article>
            @endforeach
        </section>
    </div>
@endsection
