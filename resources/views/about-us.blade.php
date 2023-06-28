@extends('layout.front')

@section('title')
    {{ Str::title('à propos de nous') }}
@endsection

@section('content')
    <!-- Start breadcrumb section -->
    <x-breadcrumb title="Contactez-nous" />
    <!-- End breadcrumb section -->

    <!-- Start about section -->
    <section class="about__section section--padding border-bottom">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
                <div class="col">
                    <div class="about__content">
                        <h2 class="about__content--title mb-18">UC PUBG, Netflix et Spotify pour une expérience enrichie</h2>
                        <div class="about__content--step mb-25">
                            <p class="about__content--desc mb-20">
                                Vous trouverez des offres spéciales
                                sur les UC de PUBG, des abonnements Netflix et Spotify, vous permettant de profiter
                                pleinement de votre temps libre.
                            </p>

                            <ul class="mb-20">
                                <li class="about__content--desc__list">
                                    Avec nos UC de PUBG, vous pouvez débloquer des avantages exclusifs pour
                                    améliorer vos performances et personnaliser votre expérience de jeu dans ce célèbre jeu
                                    de bataille royale.
                                </li>
                                <li class="about__content--desc__list">
                                    Pour les amateurs de musique, notre offre comprend des abonnements Spotify à prix
                                    réduit
                                </li>
                                <li class="about__content--desc__list">
                                    Enfin, nous proposons également des abonnements Netflix à prix avantageux, vous
                                    permettant de profiter d'une vaste sélection de films, de séries et de documentaires.
                                </li>
                            </ul>
                            <p class="about__content--desc style2">
                                Nous sommes fiers de vous offrir des produits de qualité à des prix compétitifs. Profitez de
                                nos offres exceptionnelles et découvrez une nouvelle dimension de jeu et de divertissement.
                                Contactez-nous dès aujourd'hui pour plus d'informations ou pour passer une commande.
                            </p>
                        </div>

                        <a class="about__content--btn primary__btn" href="contact.html">Demander le prix</a>
                    </div>
                </div>
                <div class="col">
                    <div class="about__thumbnail">
                        <img class="display-block" src="assets/img/other/about-thumb.webp" alt="about-thumb">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End about section -->
@endsection
