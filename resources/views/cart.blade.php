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
                    <div class="col-xl-9">
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
                                <div class="continue__shopping d-flex justify-content-between">
                                    <a class="continue__shopping--link" href="{{ route('front.allServices') }}">Continuer
                                        Vos Achats
                                    </a>

                                    @if (count($baskets))
                                        <button class="continue__shopping--clear" type="submit">Vider Le Panier</button>
                                    @endif
                                </div>
                            </div>
                        </form>
                    </div>

                    @if (count($baskets))
                        <div class="offset-sm-8  col-sm-4 offset-xl-0 col-xl-3">
                            <div class="cart__summary border-radius-5">
                                <div class="cart__summary--total mb-20">
                                    <table class="cart__summary--total__table">
                                        <tbody>
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
                                    <ul class="d-flex justify-content-end">
                                        <li>
                                            <button id="checkout" class="cart__summary--footer__btn primary__btn">Payer</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    @endif
                </div>

            </div>
        </div>
    </section>
    <!-- cart section end -->
@endsection
