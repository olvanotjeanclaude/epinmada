<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>@yield('title') - Epinmada</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="description" content="Morden Bootstrap HTML5 Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/img/favicon.ico') }}">

    <!-- ======= All CSS Plugins here ======== -->
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/swiper-bundle.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/glightbox.min.css') }}">
    <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet">

    <!-- Plugin css -->
    <link rel="stylesheet" href="{{ asset('assets/css/vendor/bootstrap.min.css') }}">

    <!-- Custom Style CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">

    <style>
        .product__card--thumbnail {
            height: 200px;
        }

        .product__card--thumbnail__img {
            height: 100%;
            width: 100%;
            object-fit: cover
        }
    </style>

    @vite(['resources/front/js/index.js'])
</head>

<body>

    <!-- Start preloader -->
    @include('include.preloader')
    <!-- End preloader -->

    <!-- Start header area -->
    @include('include.header')
    <!-- End header area -->

    <main class="main__content_wrapper">
        @yield('content')
    </main>

    <!-- Start footer section -->
    @include('include.footer')
    <!-- End footer section -->

    <!-- Start News letter popup -->
    {{-- @include('modal.newsletter') --}}

    <!-- End News letter popup -->

    <!-- Scroll top bar -->
    <button aria-label="scroll top btn" id="scroll__top"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
            viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
                d="M112 244l144-144 144 144M256 120v292" />
        </svg>
    </button>

    @include('include.script')

    @yield('script')
</body>

</html>
