<section class="product__details--tab__section section--padding d-none">
    <div class="container">
        <div class="row row-cols-1">
            <div class="col">
                <ul class="product__tab--one product__details--tab d-flex mb-30">
                    <li class="product__details--tab__list active" data-toggle="tab" data-target="#description">
                        Description</li>
                    <li class="product__details--tab__list" data-toggle="tab" data-target="#reviews">Product Reviews
                    </li>
                    <li class="product__details--tab__list" data-toggle="tab" data-target="#information">Additional
                        Info</li>

                </ul>
                <div class="product__details--tab__inner border-radius-10">
                    <div class="tab_content">
                        @include('include.single-product-tab.description')

                        <div id="reviews" class="tab_pane">
                            @include('include.single-product-tab.reviews')
                        </div>

                        <div id="information" class="tab_pane">
                            @include('include.single-product-tab.information')
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>