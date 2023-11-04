<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title> Connexion - Epinmada</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="description" content="Morden Bootstrap HTML5 Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">

    @vite(['resources/front/css/index.css'])
    @vite(['resources/front/css/auth.css'])
</head>

<body @if (Auth::check()) data-auth="true" @endif>

    <!-- Start preloader -->
    @include('include.preloader')
    <!-- End preloader -->

    <main class="main__content_wrapper">
        <div class="container   d-flex align-items-center justify-content-center">
            <form id="loginForm" autocomplete="off">
                <div class="account__login">
                    <div class="logo">
                        <img  src="{{asset('assets/img/logo/nav-logo.webp')}}" alt="">
                    </div>
                    <div class="account__login--header mb-25">
                        <div class="error"></div>
                    </div>
                    <div class="account__login--inner">
                        <label>
                            <input class="account__login--input" name="email" placeholder="Adresse e-mail"
                                type="email">
                        </label>
                        <label>
                            <input class="account__login--input" name="password" placeholder="Mot de passe"
                                type="password">
                        </label>
                        {{-- <div class="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                            <div class="account__login--remember position__relative">
                                <input class="checkout__checkbox--input" id="check1" type="checkbox">
                                <span class="checkout__checkbox--checkmark"></span>
                                <label class="checkout__checkbox--label login__remember--label" for="check1">
                                    Remember me</label>
                            </div>
                            <button class="account__login--forgot" type="submit">Forgot Your Password?</button>
                        </div> --}}
                        <button class="account__login--btn primary__btn" type="submit">Se connecter</button>
                        {{-- <div class="account__login--divide">
                            <span class="account__login--divide__text">OR</span>
                        </div>
                        <div class="account__social d-flex justify-content-center mb-15">
                            <a class="account__social--link facebook" target="_blank" href="https://www.facebook.com">Facebook</a>
                            <a class="account__social--link google" target="_blank" href="https://www.google.com">Google</a>
                            <a class="account__social--link twitter" target="_blank" href="https://twitter.com">Twitter</a>
                        </div> --}}
                        <p class="account__login--signup__text mt-3">Vous n'avez pas de compte ?
                            <a class="text__secondary" href="/sign-up">S'inscrire maintenant</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </main>

    <!-- Scroll top bar -->
    <button aria-label="scroll top btn" id="scroll__top"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
            viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
                d="M112 244l144-144 144 144M256 120v292" />
        </svg>
    </button>

    @vite(['resources/front/js/index.js'])


    @vite(['resources/front/js/sign-in.js'])
</body>

</html>
