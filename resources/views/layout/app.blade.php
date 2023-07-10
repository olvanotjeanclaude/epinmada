<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title> @yield('title') | E-pin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesbrand" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}">

    @include('include.head-css')

</head>


<body data-sidebar="dark">

    <!-- Begin page -->
    <div id="layout-wrapper">

        @include('admin.include.topbar')
        @include('admin.include.sidebar')

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">

            <div class="page-content">
                @yield('content')
            </div>
            <!-- End Page-content -->


            @include('admin.include.footer')
        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    @include('admin.include.right-sidebar')

    @include('admin.include.vendor-scripts')

    @yield('script')

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
