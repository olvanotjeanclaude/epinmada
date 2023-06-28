@extends('layout.front')

@section('title')
    Boutiques
@endsection

@section('content')
    <x-breadcrumb title="Boutiques" />
    <!-- Start shop section -->
    <section class="shop__section section--padding">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-9 col-lg-8">
                    <div class="shop__product--wrapper">
                        <div class="tab_content">
                            <div id="product_grid" class="tab_pane active show">
                                <div class="product__section--inner product__grid--inner">
                                    <div class="row row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 mb--n30">
                                        @foreach ($categories as $category)
                                            @foreach ($category->products as $product)
                                                <div class="col custom-col-2 mb-30">
                                                    <x-product :product="$product" />
                                                </div>
                                            @endforeach
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-xl-3 col-lg-4">
                    @include('include.shop.sidebar')
                </div>
            </div>
        </div>
    </section>
    <!-- End shop section -->
@endsection
