<section class="product__details--section section--padding">
    <div class="container">
        <div class="section__heading text-center mb-50">
            <h2 class="section__heading--maintitle text__secondary mb-10">Tendance Maintenant</h2>
            <p class="section__heading--desc">Achetez UC au meilleur prix !</p>
        </div>
        <div class="product__details--inner">
            <div class="row row-cols-lg-2 row-cols-md-2">
                <div class="col-sm">
                    <div class="product__details--media d-flex justify-content-center">
                        <div class="product__media--right">
                            <div class="product__media--preview__items">
                                <img class="product__media--preview__items--img text-center"
                                    src="https://cdn.epinium.net/epinium/files/www.foxepin.com/categories/pubg-mobile.jpg"
                                    alt="product-media-img">
                                <div class="product__badge">
                                    <span class="product__badge--items sale">Nouveau</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <h3 class="product__details--info__title mb-15">
                        {{ Str::upper($epin->name) }}
                    </h3>
                
                    <div class="product__details--info">
                        <x-pubg-info :epin="$epin" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
