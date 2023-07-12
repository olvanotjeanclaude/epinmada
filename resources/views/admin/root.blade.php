<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>E-pin Mada</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesbrand" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}">

    @include('include.head-css')
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/index.jsx'])
</head>

<body data-sidebar="dark">
    <div id="app"></div>

    @include('admin.include.vendor-scripts')

    @yield('script')

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
