@extends('layout.front')

@section('title')
    Page d'accueil
@endsection

@section('content')
    <!-- Start slider section -->
    @include('homepage.slider')
    <!-- End slider section -->

    <!-- Start image with text section -->
    @include('homepage.image-text')
    <!-- End image with text section -->

    <!-- Start service section -->
    @include('homepage.service')
    <!-- End service section -->

    <!-- Start about section -->
    @include('homepage.about')
    <!-- End about section -->

    <!-- Start product details section -->
    @include('homepage.product')
    <!-- End product details section -->

    <!-- Start banner section -->
    @include('homepage.banner')
    <!-- End banner section -->

    <!-- Start team members section -->
    @include('homepage.member')
    <!-- End team members section -->

    <!-- Start project section -->
    {{-- @include('homepage.project') --}}
    <!-- End project section -->

    <!-- Start counterup section -->
    {{-- @include('homepage.counterup') --}}
    <!-- End counterup section -->

    <!-- Start blog section -->
    {{-- @include('homepage.blog') --}}

    <!-- End blog section -->
@endsection
