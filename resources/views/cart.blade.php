@extends('layout.front')

@section('title')
    {{ Str::title('Panier') }}
@endsection

@section('content')
    <!-- Start breadcrumb section -->
    <x-breadcrumb title="Panier" />
    <!-- cart section start -->
    <section class="cart__section section--padding">
        <div class="container-fluid">
            <div class="cart__section--inner">
                <h2 class="cart__title mb-40">Panier</h2>
                <div class="row">
                    <div class="col-lg-8">
                        <form action="{{ route('front.emptyCart') }}" method="POST">
                            @csrf
                            <div class="cart__table">
                                <table class="cart__table--inner">
                                    <thead class="cart__table--header">
                                        <tr class="cart__table--header__items">
                                            <th class="cart__table--header__list">Produit</th>
                                            <th class="cart__table--header__list">Prix</th>
                                            <th class="cart__table--header__list">Quantité</th>
                                            <th class="cart__table--header__list">Totale</th>
                                        </tr>
                                    </thead>
                                    <tbody class="cart__table--body" id="loadBaskets">

                                    </tbody>
                                </table>
                                {{-- <div class="continue__shopping d-flex justify-content-between">
                                    <a class="continue__shopping--link" href="{{ route('front.allServices') }}">Continuer
                                        Vos Achats
                                    </a>

                                    @if (count($baskets))
                                        <button class="continue__shopping--clear" type="submit">Vider Le Panier</button>
                                    @endif
                                </div> --}}
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="cart__summary border-radius-10">
                            <div class="coupon__code mb-30">
                                <h3 class="coupon__code--title">Coupon</h3>
                                <p class="coupon__code--desc">Entrez votre code promo si vous en avez un.</p>
                                <div class="coupon__code--field d-flex">
                                    <label>
                                        <input class="coupon__code--field__input border-radius-5" placeholder="Code promo"
                                            type="text">
                                    </label>
                                    <button class="coupon__code--field__btn primary__btn" type="submit">
                                        Appliquer Coupon
                                    </button>
                                </div>
                            </div>
                            <div class="cart__note mb-20">
                                <h3 class="cart__note--title">Note</h3>
                                <p class="cart__note--desc">Ajoutez des instructions spéciales pour votre vendeur...</p>
                                <textarea class="cart__note--textarea border-radius-5"></textarea>
                            </div>
                            <div class="cart__summary--total mb-20">
                                <table class="cart__summary--total__table">
                                    <tbody>
                                        {{-- <tr class="cart__summary--total__list">
                                                <td class="cart__summary--total__title text-left">SUBTOTAL</td>
                                                <td class="cart__summary--amount text-right">$860.00</td>
                                            </tr> --}}
                                        <tr class="cart__summary--total__list">
                                            <td class="cart__summary--total__title text-left">TOTAL</td>
                                            <td class="cart__summary--amount text-right">
                                                {{ formatPrice($baskets->sum('sub_amount')) }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="cart__summary--footer">
                                {{-- <p class="cart__summary--footer__desc">Shipping & taxes calculated at checkout</p> --}}
                                <ul class="d-flex justify-content-between">
                                    <li>
                                        <button class="cart__summary--footer__btn primary__btn cart" type="submit">Metre A
                                            Jour
                                        </button>
                                    </li>
                                    <li>
                                        <a class="cart__summary--footer__btn primary__btn checkout">Payer</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- cart section end -->

    <!-- Start product section -->
    <section class="product__section section--padding pt-0 d-none">
        <div class="container-fluid">
            <div class="section__heading text-center mb-50">
                <h2 class="section__heading--maintitle text__secondary mb-10">New Products</h2>
                <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos
                    flusterd impressive man farcrud opened.</p>
            </div>
            <div class="product__inner">
                <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                    <div class="col custom-col-2 mb-30">
                        <article class="product__card">
                            <div class="product__card--thumbnail">
                                <a class="product__card--thumbnail__link display-block" href="product-details.html">
                                    <img class="product__card--thumbnail__img product__primary--img display-block"
                                        src="assets/img/product/product1.webp" alt="product-img">
                                    <img class="product__card--thumbnail__img product__secondary--img display-block"
                                        src="assets/img/product/product2.webp" alt="product-img">
                                </a>
                                <ul class="product__card--action d-flex align-items-center justify-content-center">
                                    <li class="product__card--action__list">
                                        <a class="product__card--action__btn" title="Wishlist" href="wishlist.html">
                                            <svg class="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg"
                                                width="25.51" height="22.443" viewBox="0 0 512 512">
                                                <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="32"></path>
                                            </svg>
                                            <span class="visually-hidden">Wishlist</span>
                                        </a>
                                    </li>
                                    <li class="product__card--action__list">
                                        <a class="product__card--action__btn" title="Quick View" data-bs-toggle="modal"
                                            data-bs-target="#examplemodal" href="javascript:void(0)">
                                            <svg class="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg"
                                                width="24.51" height="22.443" viewBox="0 0 512 512">
                                                <path
                                                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                    fill="none" stroke="currentColor" stroke-miterlimit="10"
                                                    stroke-width="32"></path>
                                                <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448">
                                                </path>
                                            </svg>
                                            <span class="visually-hidden">Quick View</span>
                                        </a>
                                    </li>
                                    <li class="product__card--action__list">
                                        <a class="product__card--action__btn" title="Compare" href="compare.html">
                                            <svg class="product__card--action__btn--svg"
                                                xmlns="http://www.w3.org/2000/svg" width="21.51" height="21.443"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                            </svg>
                                            <span class="visually-hidden">Compare</span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="product__badge">
                                    <span class="product__badge--items sale">SALE</span>
                                </div>
                            </div>
                            <div class="product__card--content text-center">
                                <span class="product__card--meta__tag">Watch,Woman</span>
                                <h3 class="product__card--title"><a href="product-details.html">Advanced To Watch </a>
                                </h3>
                                <div class="product__card--price">
                                    <span class="current__price">$245</span>
                                    <span class="price__divided"></span>
                                    <span class="old__price"> $356</span>
                                </div>
                                <a class="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End product section -->
@endsection

@section('script')
    <script src="{{ asset('assets/js/basket.js') }}" type="module"></script>
@endsection
