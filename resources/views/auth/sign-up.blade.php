@extends('layout.front')
@section('title')
    Connexion
@endsection
@section('content')
    <div class="container" style="margin-top: 5rem">
        <form action="" autocomplete="false">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="account__login register">
                        <div class="account__login--header mb-25">
                            <h2 class="account__login--header__title h3 mb-10">Créer un compte</h2>
                            <p class="account__login--header__desc">Inscrivez-vous ici si vous êtes un nouveau client</p>
                        </div>
                        <div class="account__login--inner">
                            <div class="d-flex gap-2">
                                <label class="flex-grow-1">
                                    <input class="account__login--input" name="name" placeholder="Nom" type="text">
                                </label>
                                <label class="flex-grow-1">
                                    <input class="account__login--input" name="surname" placeholder="Prénom" type="text">
                                </label>
                            </div>
                            <label>
                                <input class="account__login--input" name="email" placeholder="Adresse e-mail" type="email">
                            </label>
                            <label>
                                <input class="account__login--input" name="password" autocomplete="new-password" placeholder="Mot de passe" type="password">
                            </label>
                            <label>
                                <input class="account__login--input" name="confirm_password" autocomplete="new-password" placeholder="Confirmez le mot de passe" type="password">
                            </label>
                            <label>
                                <button class="account__login--btn primary__btn mb-10" type="submit">Enregistrer</button>
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
    @vite(['resources/front/js/sign-up.js'])
@endsection
