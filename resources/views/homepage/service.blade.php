<section class="services__section services__section--bg section--padding">
    <div class="container">
        <div class="section__heading text-center mb-50">
            <h2 class="section__heading--maintitle text__secondary mb-10">Notre meilleur service</h2>
            <p class="section__heading--desc">
                Regardez des films, écoutez de la musique et jouez à PUBG sur votre PC, Mac, mobile, tablette.
            </p>
        </div>
        <div class="services__inner">
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2 mb--n30">
                @foreach ($categories as $index => $category)
                    <div class="col custom-col mb-30">
                        <article class="services__card">
                            <a class="services__card--link" href="{{ route('front.getProducts', $category->slug) }}">
                                <div class="services__card--topbar d-flex justify-content-between">
                                    <div class="services__card--icon mb-20">
                                        <img class="display-block services__card--primary__icon"
                                            src="assets/img/icon/service-icon1.webp" alt="services-icon">
                                        <img class="display-block services__card--secondary__icon"
                                            src="assets/img/icon/service-icon1-white.webp" alt="services-icon">
                                    </div>
                                    <div class="services__card--number">
                                        <span class="services__card--number__text"> {{ $category->id }} </span>
                                    </div>
                                </div>
                                <div class="services__card--content">
                                    <h3 class="services__card--maintitle mb-15">{{ $category['name'] }}</h3>
                                    <p class="services__card--desc mb-15">{{ $category['description'] }}</p>
                                    <span class="services__card--readmore text__secondary">En savoir plus...
                                        <svg class="services__card--readmore__svg" xmlns="http://www.w3.org/2000/svg"
                                            width="15.51" height="15.443" viewBox="0 0 512 512">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="48"
                                                d="M268 112l144 144-144 144M392 256H100" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        </article>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
