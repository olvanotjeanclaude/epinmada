<h3 class="product__details--info__title text-center text-sm-start mb-15">
    {{ Str::upper($epin->name) }}
</h3>

<div class="row">
    <div class="col-sm-5">
        <div class="img-container">
            <img height="300" src="{{ getImage($epin->image_url) }}" class="img img-fluid" alt="">
        </div>
    </div>
    <div class="col-sm-7">
        <div class="product__details--info">
            <form action="#">
                <x-pubg-info :epin="$epin" />
            </form>
        </div>
    </div>
</div>
