@extends('layout.front')
@section('title')
    Connexion
@endsection
@section('content')
    {{-- <x-breadcrumb title="S'inscrire" /> --}}

    <div class="container">
        <form action="{{ route('api.signUp') }}" class="needs-validation" novalidate id="sign-up-form" autocomplete="false">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="account__login register">
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
                </div>
            </div>
        </form>
    </div>
@endsection

@section('script')
    @vite(['resources/front/js/sign-up.js'])
@endsection
