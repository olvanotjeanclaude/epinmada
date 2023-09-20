<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>@yield('title') - Epinmada</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="description" content="Morden Bootstrap HTML5 Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/img/favicon.ico') }}">

    @vite(['resources/front/css/index.css'])
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

    @vite(['resources/front/js/index.js'])

    @yield('script')
</body>

</html>
