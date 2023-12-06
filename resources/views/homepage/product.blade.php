@if ($epin)
    <section class="product__details--section section--padding">
        <div class="container">
            <div class="section__heading text-center mb-50">
                <h2 class="section__heading--maintitle text__secondary mb-10">Tendance Maintenant</h2>
                <p class="section__heading--desc">Achetez UC au meilleur prix !</p>
            </div>
            <div class="product__details--inner">
                <div class="product__details--inner">
                    <div class="row row-cols-lg-2 row-cols-md-2">
                        <div class="col-sm-5  text-end">
                            <img  class="img img-fluid"
                                src="https://cdn.epinium.net/epinium/files/www.foxepin.com/categories/pubg-mobile.jpg"
                                alt="product-media-img">
                        </div>
                        <div class="col-sm">
                            <h3 class="product__details--info__title mt-5 mb-15">
                                {{ Str::upper($epin->name) }}
                            </h3>
    
                            <div class="product__details--info">
                                <x-pubg-info :epin="$epin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endif
