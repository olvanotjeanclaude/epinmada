<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}">

    @include('include.head-css')

    <title>Connexion</title>
</head>

<body>
    <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card overflow-hidden">
                        <div class="bg-primary bg-soft">
                            <div class="row">
                                <div class="col-7">
                                    <div class="text-primary p-4">
                                        <h5 class="text-primary">Bienvenue !</h5>
                                        <p>Connectez-vous pour continuer à {{ env('APP_NAME') }}</p>
                                    </div>
                                </div>
                                <div class="col-5 align-self-end">
                                    <img src="/images/profile-img.png" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="auth-logo">
                                <a href="/" class="auth-logo-light">
                                    <div class="avatar-md profile-user-wid mb-4">
                                        <span class="avatar-title rounded-circle bg-light">
                                            <img src="/images/logo-light.svg" alt="" class="rounded-circle"
                                                height="34">
                                        </span>
                                    </div>
                                </a>

                                <a href="/" class="auth-logo-dark">
                                    <div class="avatar-md profile-user-wid mb-4">
                                        <span class="avatar-title rounded-circle bg-light">
                                            <img src="/images/logo.svg" alt="" class="rounded-circle"
                                                height="34">
                                        </span>
                                    </div>
                                </a>
                            </div>

                            @if ($errors->any())
                                <x-alert :errors="$errors->all()" />
                            @endif

                            <div class="p-2">
                                <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                                    @csrf
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="text" class="form-control" id="email" name="email"
                                            placeholder="E-mail">
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Mot de passe</label>
                                        <div class="input-group auth-pass-inputgroup">
                                            <input type="password" class="form-control" name="password"
                                                placeholder="Entrer le mot de passe" aria-label="Password"
                                                aria-describedby="password-addon">
                                            <button class="btn btn-light " type="button" id="password-addon">
                                                <i class="mdi mdi-eye-outline"></i>
                                            </button>
                                        </div>
                                    </div>

                                    {{-- <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="remember-check">
                                        <label class="form-check-label" for="remember-check">
                                            Remember me
                                        </label>
                                    </div> --}}

                                    <div class="mt-3 d-grid">
                                        <button class="btn btn-primary waves-effect waves-light" type="submit">
                                            Se connecter
                                        </button>
                                    </div>

                                    <div class="mt-4 text-center">
                                        <a href="#" class="text-muted">
                                            <i class="mdi mdi-lock me-1"></i>
                                            Mot de passe oublié?
                                        </a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div class="mt-5 text-center">

                        <div>
                            <p>
                                © {{ date('Y') }} {{ env('APP_NAME') }}
                                <i class="mdi mdi-heart text-danger"></i>
                                by Olvanot Jean Claude Rakotonirina
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- end account-pages -->

    @include('admin.include.vendor-scripts')

    <!-- App js -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
