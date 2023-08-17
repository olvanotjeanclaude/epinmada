@extends('layout.front')
@section('title')
    Connexion
@endsection
@section('content')
    <x-breadcrumb title="Contactez-nous" />

    <div class="container   d-flex align-items-center justify-content-center" style="margin-bottom: 10rem; margin-top:5rem">
        <form id="loginForm" autocomplete="off">
            <div class="account__login">
                <div class="account__login--header mb-25">
                    <h2 class="account__login--header__title h3 mb-10">Se Connecter</h2>

                    <div class="error"></div>
                </div>
                <div class="account__login--inner">
                    <label>
                        <input class="account__login--input" name="email" placeholder="Adresse e-mail" type="email">
                    </label>
                    <label>
                        <input class="account__login--input" name="password" placeholder="Mot de passe" type="password">
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
    @vite(['resources/front/js/sign-in.js'])
@endsection
