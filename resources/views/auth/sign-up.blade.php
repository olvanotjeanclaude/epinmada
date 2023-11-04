<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Registration - Epinmada</title>
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
        <div class="auth-form">
            <form action="{{ route('api.signUp') }}" class="needs-validation" novalidate id="sign-up-form"
                autocomplete="false">
                <div class="account__login register">
                    <div class="logo">
                        <img  src="{{asset('assets/img/logo/nav-logo.webp')}}" alt="">
                    </div>
                    <div class="account__login--header mb-25">
                        <h2 class="account__login--header__title h3 mb-10">Créer un compte</h2>
                        <p class="account__login--header__desc">Inscrivez-vous ici si vous êtes un nouveau client</p>
                    </div>
                    <div class="account__login--inner">
                        <div class="d-flex flex-column flex-md-row gap-2">
                            <label class="flex-grow-1">
                                <input class="account__login--input" name="name" placeholder="Nom" required
                                    type="text">
                                <small class="text-danger error" id="error-name"></small>
                            </label>
                            <label class="flex-grow-1">
                                <input class="account__login--input" name="surname" placeholder="Prénom" type="text">
                                <small class="text-danger error" id="error-surname"></small>
                            </label>
                        </div>
                        <label>
                            <input class="account__login--input" name="email" placeholder="Adresse e-mail"
                                type="email">
                            <small class="text-danger error" id="error-email"></small>
                        </label>
                        <label>
                            <input class="account__login--input" name="phone" placeholder="Téléphone" type="phone">
                            <small class="text-danger error" id="error-phone"></small>
                        </label>
                        <label>
                            <input class="account__login--input" name="password" autocomplete="new-password"
                                placeholder="Mot de passe" type="password">
                            <small class="text-danger error" id="error-password"></small>
                        </label>
                        <label>
                            <input class="account__login--input" name="confirm_password" autocomplete="new-password"
                                placeholder="Confirmez le mot de passe" type="password">
                            <small class="text-danger error" id="error-confirm_password"></small>
                        </label>
                        <label>
                            <button class="account__login--btn primary__btn mb-10" id="submitBtn"
                                type="submit">Enregistrer</button>
                        </label>


                        <p class="account__login--signup__text">Avez-vous déjà un compte ?
                            <a class="text__secondary" href="/sign-in">Connectez vous maintenant</a>
                        </p>
                        {{-- <div class="account__login--remember position__relative">
                            <input class="checkout__checkbox--input" id="check2" type="checkbox">
                            <span class="checkout__checkbox--checkmark"></span>
                            <label class="checkout__checkbox--label login__remember--label" for="check2">
                                I have read and agree to the terms &amp; conditions</label>
                        </div> --}}
                    </div>
                </div>
            </form>
        </div>
    </main>

    @vite(['resources/front/js/index.js'])
    @vite(['resources/front/js/sign-up.js'])

    @yield('script')
</body>

</html>
