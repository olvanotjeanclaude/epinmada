@extends('layout.front')

@section('title')
    Spotify
@endsection

@section('content')
    <x-breadcrumb title="Spotify" />

    <!-- Start product details section -->
    <x-default-shop-product-card :product="$product" />
    <!-- End product details section -->

    <!-- Start product details tab section -->
    <x-product-detail-tab />
    <!-- End product details tab section -->
@endsection
