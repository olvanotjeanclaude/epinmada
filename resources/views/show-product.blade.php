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
                        <h1 class="breadcrumb__content--title mb-10">Product Details</h1>
                        <ul class="breadcrumb__content--menu d-flex">
                            <li class="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
                            <li class="breadcrumb__content--menu__items"><span class="text__secondary">Product Details</span>
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
            <div class="col-sm-6 col-md-7">
                <h3 class="product__details--info__title text-center text-sm-start mb-15">BASIC MICRO DAYS MONEY BACK
                    GUARANTEE.</h3>

                <img src="https://www.pubgmobile.com/images/event/home/part6.jpg" class="img img-fluid" alt="">
                <br>
                <div class="product__details--info">
                    <form action="#">
                        <div class="product__details--info__price mt-3 mb-10">
                            <span class="current__price">$299.00</span>
                            {{-- <span class="old__price">$320.00</span> --}}
                        </div>
                        {{-- <p class="product__details--info__desc mb-15">description</p> --}}
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
        </div>
    </section>
    <!-- End product details section -->

    <!-- Start product details tab section -->
    <section class="product__details--tab__section section--padding">
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
