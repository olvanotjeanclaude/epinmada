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
                    <x-pubg-card :epin="$selectedEpin" />
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
    <x-product-detail-tab />
    <!-- End product details tab section -->
@endsection
